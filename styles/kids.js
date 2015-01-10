var RCSS = require('rcss');

var kidsName = {
  color: '#555',
  display: 'block',
  fontFamily: 'serif',
  fontSize: '0.916666em',
  fontStyle: 'italic',
  fontWeight: 'bold',
  marginBottom: '0.333em',
  '@media (max-width: 600px)': {
    color: '#eee',
  },
};

module.exports = {
  name: RCSS.registerClass(kidsName),
};
