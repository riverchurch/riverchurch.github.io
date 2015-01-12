var RCSS = require('rcss');

var quote = {
  color: '#202020',
  fontFamily: 'serif',
  fontSize: '1.333em',
  fontWeight: 'bold',
  fontStyle: 'italic',
  borderLeft: '4px solid #999',
  padding: '0 0 0 0.5em',
  ':before': {
    fontSize: '1.5em',
    lineHeight: 0.666,
    position: 'relative',
    top: '0.1666em',
    verticalAlign: 'bottom',
    content: '“',
    paddingRight: '0.1111em',
  },
  ':after': {
    fontSize: '1.5em',
    lineHeight: 0.666,
    position: 'relative',
    top: '0.1666em',
    verticalAlign: 'bottom',
    content: '”',
    paddingLeft: '0.1111em',
  },
  '@media screen and (min-width: 601px)': {
    color: '#fff',
  }
};

var section = {
  padding: '0.6666em 0',
  borderBottom: '1px solid #999',
};

var lastSection = RCSS.cascade(section, {
  borderBottom: '0 none',
});

var sectionAnchor = {
  color: '#002759',
  textDecoration: 'none',
  '@media screen and (min-width: 601px)': {
    color: '#fff',
  },
};

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
  '@media (min-width: 600px)': {
    color: '#eee',
  },
};

//var SELECTORS = [quote, section, lastSection, sectionAnchor, sectionName];

module.exports = {
  quote: RCSS.registerClass(quote),
  section: RCSS.registerClass(section),
  lastSection: RCSS.registerClass(lastSection),
  sectionAnchor: RCSS.registerClass(sectionAnchor),
  sectionTitle: RCSS.registerClass(sectionTitle),
  sectionName: RCSS.registerClass(sectionName),
};

