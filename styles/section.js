var RCSS = require('rcss');

var kidsPull = {
  '@media screen and (max-width: 600px)': {
    marginTop: '2em',
  },
  '@media screen and (min-width: 601px)': {
    color: '#fff',
    position: 'absolute',
    right: '-120%',
    top: 0,
    width: '70%',
  }
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
};

var kidsList = {
  margin: '0.33em 0 0.33em 1em',
};

//var SELECTORS = [quote, section, lastSection, sectionAnchor, podcastAnchor,
// sectionTitle, sectionName];

module.exports = {
  kidsPull: RCSS.registerClass(kidsPull),
  kidsList: RCSS.registerClass(kidsList),
  sectionTitle: RCSS.registerClass(sectionTitle),
  sectionName: RCSS.registerClass(sectionName),
};

