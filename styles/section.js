var RCSS = require('rcss');

var sectionTitle = {};

var sectionName = {
  color: '#555',
  display: 'block',
  fontSize: '0.916666em',
  fontFamily: 'serif',
  fontStyle: 'italic',
  fontWeight: 'bold',
  marginBottom: '0.333em',
  ':after': {
    content: ':',
  },
};


module.exports = {
  sectionTitle: RCSS.registerClass(sectionTitle),
  sectionName: RCSS.registerClass(sectionName),
};

