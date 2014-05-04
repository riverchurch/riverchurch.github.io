
var $ = (selector, ctx=document) => [...ctx.querySelectorAll(selector)];
var $$ = (selector, ctx=document) => ctx.querySelector(selector);

console.log($('li'));

var fadeIn = (img) => img.style.opacity = '';


var img = $$('#hero-1');

console.log(img.complete);
if (img.complete) fadeIn(img);
else img.onload = () => fadeIn(img);

module.exports = { img };

