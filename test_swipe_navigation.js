const assert = require('assert');
const deck = require('./subject-filter.js');

assert.strictEqual(typeof deck.classifySwipe, 'function', 'classifySwipe must be exported');
assert.strictEqual(deck.classifySwipe(0, 0, -90, 8, 360), 'next');
assert.strictEqual(deck.classifySwipe(0, 0, 90, 8, 360), 'previous');
assert.strictEqual(deck.classifySwipe(0, 0, -40, 2, 360), null, 'short drags must not navigate');
assert.strictEqual(deck.classifySwipe(0, 0, 90, 140, 360), null, 'vertical scrolling must not navigate');
assert.strictEqual(deck.classifySwipe(0, 0, -70, 5, 320), 'next', 'minimum threshold should work on small screens');

(async () => {
  const listeners = {};
  const stage = {
    style: {},
    addEventListener(type, fn, capture) { listeners[type] = { fn, capture: !!capture }; },
    getBoundingClientRect() { return { width: 360 }; },
    setPointerCapture() {}
  };
  let previousClicks = 0;
  let nextClicks = 0;
  const previous = { disabled: false, click() { previousClicks += 1; } };
  const next = { disabled: false, click() { nextClicks += 1; } };
  const elements = { 'study-stage': stage, 'prev-card': previous, 'next-card': next };
  assert.strictEqual(deck.installSwipeNavigation({ getElementById: id => elements[id] }), true);
  assert.strictEqual(stage.style.touchAction, 'pan-y');
  for (const eventName of ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'click']) {
    assert.strictEqual(typeof listeners[eventName].fn, 'function', eventName + ' listener must be installed');
  }
  assert.strictEqual(listeners.click.capture, true, 'swipe click suppression must run in capture phase');

  listeners.pointerdown.fn({ pointerId: 1, button: 0, clientX: 240, clientY: 100 });
  listeners.pointermove.fn({ pointerId: 1, clientX: 130, clientY: 105, cancelable: true, preventDefault() {} });
  listeners.pointerup.fn({ pointerId: 1, clientX: 130, clientY: 105 });
  await new Promise(resolve => setTimeout(resolve, 170));
  assert.strictEqual(nextClicks, 1, 'left swipe must activate Next');

  listeners.pointerdown.fn({ pointerId: 2, button: 0, clientX: 120, clientY: 100 });
  listeners.pointermove.fn({ pointerId: 2, clientX: 230, clientY: 104, cancelable: true, preventDefault() {} });
  listeners.pointerup.fn({ pointerId: 2, clientX: 230, clientY: 104 });
  await new Promise(resolve => setTimeout(resolve, 170));
  assert.strictEqual(previousClicks, 1, 'right swipe must activate Previous');

  listeners.pointerdown.fn({ pointerId: 3, button: 0, clientX: 200, clientY: 100 });
  listeners.pointermove.fn({ pointerId: 3, clientX: 180, clientY: 102, cancelable: true, preventDefault() {} });
  listeners.pointerup.fn({ pointerId: 3, clientX: 180, clientY: 102 });
  let blocked = false;
  listeners.click.fn({ preventDefault() { blocked = true; }, stopImmediatePropagation() { blocked = true; } });
  assert.strictEqual(blocked, true, 'a drag must suppress the following tap/click');
  assert.strictEqual(nextClicks, 1, 'short drag must not navigate');
  assert.strictEqual(previousClicks, 1, 'short drag must not navigate backward');

  console.log('Swipe navigation unit and gesture checks passed');
})().catch(error => { console.error(error); process.exit(1); });
