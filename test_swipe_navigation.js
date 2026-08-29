const assert = require('assert');
const deck = require('./subject-filter.js');

assert.strictEqual(typeof deck.classifySwipe, 'function', 'classifySwipe must be exported');
assert.strictEqual(deck.classifySwipe(0, 0, -90, 8, 360), 'next');
assert.strictEqual(deck.classifySwipe(0, 0, 90, 8, 360), 'previous');
assert.strictEqual(deck.classifySwipe(0, 0, -40, 2, 360), null, 'short drags must not navigate');
assert.strictEqual(deck.classifySwipe(0, 0, 90, 140, 360), null, 'vertical scrolling must not navigate');
assert.strictEqual(deck.classifySwipe(0, 0, -70, 5, 320), 'next', 'minimum threshold should work on small screens');

const listeners = {};
const stage = {
  style: {},
  addEventListener(type, fn, capture) { listeners[type] = { fn, capture: !!capture }; },
  getBoundingClientRect() { return { width: 360 }; },
  setPointerCapture() {}
};
const previous = { disabled: false, click() {} };
const next = { disabled: false, click() {} };
const elements = { 'study-stage': stage, 'prev-card': previous, 'next-card': next };
assert.strictEqual(deck.installSwipeNavigation({ getElementById: id => elements[id] }), true);
assert.strictEqual(stage.style.touchAction, 'pan-y');
for (const eventName of ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'click']) {
  assert.strictEqual(typeof listeners[eventName].fn, 'function', eventName + ' listener must be installed');
}
assert.strictEqual(listeners.click.capture, true, 'swipe click suppression must run in capture phase');
console.log('Swipe navigation unit checks passed');
