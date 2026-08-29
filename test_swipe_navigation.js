const assert = require('assert');
const deck = require('./subject-filter.js');

assert.strictEqual(typeof deck.classifySwipe, 'function', 'classifySwipe must be exported');
assert.strictEqual(deck.classifySwipe(0, 0, -48, 20, 360), 'next', 'moderate diagonal left swipe should navigate');
assert.strictEqual(deck.classifySwipe(0, 0, 48, 20, 360), 'previous', 'moderate diagonal right swipe should navigate');
assert.strictEqual(deck.classifySwipe(0, 0, -28, 5, 360), null, 'slow short drag must not navigate');
assert.strictEqual(deck.classifySwipe(0, 0, 55, 95, 360), null, 'clearly vertical scrolling must not navigate');
assert.strictEqual(deck.classifySwipe(0, 0, -30, 7, 360, 0.65), 'next', 'quick flick should navigate with less distance');
assert.strictEqual(deck.classifySwipe(0, 0, 30, 7, 360, 0.65), 'previous', 'quick reverse flick should navigate with less distance');

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

  listeners.pointerdown.fn({ pointerId: 1, button: 0, clientX: 240, clientY: 100, timeStamp: 0 });
  listeners.pointermove.fn({ pointerId: 1, clientX: 190, clientY: 118, timeStamp: 100, cancelable: true, preventDefault() {} });
  assert.match(stage.style.transform, /rotate/, 'card should rotate while following the finger');
  assert.match(stage.style.transform, /scale/, 'card should gain depth while dragging');
  listeners.pointerup.fn({ pointerId: 1, clientX: 190, clientY: 118, timeStamp: 120 });
  assert.match(stage.style.transition, /cubic-bezier/, 'committed swipe should use inertial easing');
  await new Promise(resolve => setTimeout(resolve, 240));
  assert.strictEqual(nextClicks, 1, 'left swipe must activate Next');

  listeners.pointerdown.fn({ pointerId: 2, button: 0, clientX: 120, clientY: 100, timeStamp: 500 });
  listeners.pointermove.fn({ pointerId: 2, clientX: 168, clientY: 118, timeStamp: 600, cancelable: true, preventDefault() {} });
  listeners.pointerup.fn({ pointerId: 2, clientX: 168, clientY: 118, timeStamp: 620 });
  await new Promise(resolve => setTimeout(resolve, 240));
  assert.strictEqual(previousClicks, 1, 'right swipe must activate Previous');

  listeners.pointerdown.fn({ pointerId: 3, button: 0, clientX: 200, clientY: 100, timeStamp: 1000 });
  listeners.pointermove.fn({ pointerId: 3, clientX: 180, clientY: 102, timeStamp: 1300, cancelable: true, preventDefault() {} });
  listeners.pointerup.fn({ pointerId: 3, clientX: 180, clientY: 102, timeStamp: 1350 });
  let blocked = false;
  listeners.click.fn({ preventDefault() { blocked = true; }, stopImmediatePropagation() { blocked = true; } });
  assert.strictEqual(blocked, true, 'a drag must suppress the following tap/click');
  assert.strictEqual(nextClicks, 1, 'short drag must not navigate');
  assert.strictEqual(previousClicks, 1, 'short drag must not navigate backward');
  assert.match(stage.style.transition, /cubic-bezier/, 'cancelled drag should spring back smoothly');

  console.log('Responsive swipe navigation and animation checks passed');
})().catch(error => { console.error(error); process.exit(1); });
