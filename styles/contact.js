var RCSS = require('rcss');

// #connect-with-us label,
// #connect-with-us input,
// #connect-with-us textarea
var INPUT_BASE = {
  display: 'block',
  verticalAlign: 'top',
};

var fieldset = {
  padding: '0 0',
  position: 'relative',
};

var label = RCSS.cascade(INPUT_BASE, {
  fontSize: '0.666em',
  fontWeight: 300,
  position: 'absolute',
  top: '2.23em',
  left: '1rem',
  opacity: 0,
  top: '1.5em',
  transition: '0.333s ease top, 0.333s ease opacity',
});

var label__hasContent = RCSS.cascade(label, {
  opacity: 1,
  top: '0.4rem',
});

// #connect-with-us input:focus,
// #connect-with-us textarea:focus {
var textfield = RCSS.cascade(INPUT_BASE, {
  background: 'transparent',
  border: 0,
  borderBottom: '2px solid #777',
  padding: '1.333em 1em 0.5em 1em',
  width: '100%',
  transition: 'all 0.3s ease-in',
  ':focus': {
    background: '#fafafa',
    outline: 0,
    borderBottomColor: '#333',
  },
});

var button = {
  background: '#fafafa',
  border: 0,
  borderTop: '1px solid #e9e9e9',
  borderBottom: '2px solid #444',
  color: '#000',
  marginTop: '1.333em',
  fontSize: '1.333em',
  padding: '0.5em 1.5em',
  /*
    &:hover,
    &:focus
      background: #E6511E
      border-bottom-color: #AE3911
    */
};

// var SELECTORS = [fieldset, label, label__hasContent, textfield, button];

module.exports = {
  fieldset: RCSS.registerClass(fieldset),
  label: RCSS.registerClass(label),
  label__hasContent: RCSS.registerClass(label__hasContent),
  textfield: RCSS.registerClass(textfield),
  button: RCSS.registerClass(button),
};
