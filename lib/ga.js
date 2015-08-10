
// TODO: how should I handle this for static es6 exports?
if (typeof window === 'undefined') {
  module.exports = function() {}
}
else {
  module.exports = function(...args) {
    if (typeof window.ga === 'function' && process.env.NODE_ENV === 'production') {
      window.ga(...args);
    }
  }
}

