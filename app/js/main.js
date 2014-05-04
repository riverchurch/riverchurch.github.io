
// jQuery Lite
var $ = (selector, ctx=document) => [...ctx.querySelectorAll(selector)];
var $$ = (selector, ctx=document) => ctx.querySelector(selector);
var UUID = () => 'uuid-' + Math.floor(Math.random() ^ Math.random() * 1000);
var events = {};
var on = (element, event, fn) => {
  if (typeof element === 'string') element = $(element);
  events[UUID()] = { element, event, fn };
  if (element instanceof Array)
    element.forEach(addEventListener);
  else addEventListener();

  function addEventListener(el=element) {
     el.addEventListener(event, fn, false);
  }
}

var off = (element, event, fn) => {
  if (typeof element === 'string') element = $(element);
  for (var o in events) {
    o = events[o];
    if (o.event !== event) continue;
    fn = fn || o.fn;
    if (o.element instanceof Array) {
      // TOOD: make this a bit smarter than just looping in the same order
      if (o.element.every((e, i) => e === element[i]))
        o.element.forEach(removeEventListener);
      else removeEventListener();
    }
  }
  function removeEventListener(el=element) {
    el.removeEventListener(event, fn);
  }
}

var delegateTo = function delegateTo(selector, fn) {
  return function(e) {
    if (isChild(e.target, 'button', this)) fn.apply(this, arguments);
  };
};

var isChild = (node, parentSelector, stopAtNode=document.body) => {
  while (!node.matches(parentSelector)) {
    if (node === stopAtNode) return false;
    node = node.parentNode;
  }
  return true;
}

// end jQuery Lite

var fadeIn = () => document.body.classList.remove('is-loading');
var img = $$('#hero-1');

if (img.complete) fadeIn(img);
else img.onload = () => fadeIn(img);

on('.kids', 'click', delegateTo('button', function(e) {
  console.log('clicked a kid', this)
}));

module.exports = { img };

