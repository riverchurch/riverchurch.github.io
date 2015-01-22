var RCSS = require('rcss');

var mod = {
  borderBottom: '1px solid #ccc',
  padding: '0.75em 0',
  '@media screen and (min-width: 601px)': {
    borderBottomColor: '#fff',
  },
};

var name = {
  color: '#111',
  display: 'block',
  fontSize: '1.333em',
  fontWeight: 'bold',
};

var age = {
  color: '#555',
  display: 'block',
  fontFamily: 'serif',
  fontSize: '0.916666em',
  fontStyle: 'italic',
  fontWeight: 'bold',
  marginLeft: '0.1111em',
};

module.exports = {
  mod: RCSS.registerClass(mod),
  name: RCSS.registerClass(name),
  age: RCSS.registerClass(age),
};

