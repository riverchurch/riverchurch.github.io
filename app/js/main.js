
// jQuery Lite
var $ = (selector, ctx=document) => Array.prototype.slice.call(ctx.querySelectorAll(selector), 0);
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
    var ctx;
    if ((ctx = isChild(e.target, 'button', this))) fn.apply(ctx, arguments);
  };
};

var isChild = (node, parentSelector, stopAtNode=document.body) => {
  while (!node.matches(parentSelector)) {
    if (node === stopAtNode) return false;
    node = node.parentNode;
  }
  return node;
}

// end jQuery Lite

(function() {
  var called = false;

  var onReady = function() {
    if (called) return;
    called = true;

    $('form input, textarea').forEach(function(el) {
      if (el.value)
        el.parentNode.classList.add('has-content');
    });

    on('form', 'keydown', function(e) {
      var action = e.target.value ? 'add' : 'remove';
      e.target.parentNode.classList[action]('has-content');
    });

    on('form', 'submit', function(e) {
      e.preventDefault();
      var data = serialize(this);
      var id = last(this.action.split('/'));
      data.endpoint = '' + id;

      console.log('TODO: post form data to: %s', id, data);
      // post('http://skookie.aws.af.cm/contact', data).then(successHandler, failureHandler);

      var form = this;

      function successHandler(data) {
        var node = document.createElement('div');
        node.style.height = form.clientHeight + 'px';
        node.className = 'form__success';
        node.innerHTML = 'Thanks! We&rsquo;ll be in touch!';
        form.parentNode.replaceChild(node, form);
      }

      function failureHandler(data) {
        console.log('TODO: failureHandler', data);
      }

    });

    document.body.classList.add('is-ready');
  };

  document.addEventListener('DOMContentLoaded', onReady, false);
  window.addEventListener('onload', onReady, false);
  setTimeout(onReady, 50);

  function last(a) {
    return a[a.length - 1];
  };

  function getValue(element) {
    var type = element.type;

    if (type === 'checkbox')
      return element.checked;

    if (type === 'radio')
      return element.checked;

    return element.value || '';
  }

  function serialize(form) {
    return $$('input, textarea').reduce(function(o, el) {
      var name = el.name;
      var value = getValue(el);
      if (typeof o[name] !== 'undefined') {
        if (Array.isArray(o[name]))
          o[name] = [o[name]];
        o[name].push(value);
      }
      else {
        o[name] = value;
      }
      return o;
    }, {});
  }

})();

