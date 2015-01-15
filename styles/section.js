var RCSS = require('rcss');

var quote = {
  color: '#202020',
  fontFamily: 'serif',
  fontSize: '1.333em',
  fontWeight: 'bold',
  fontStyle: 'italic',
  borderLeft: '4px solid #999',
  padding: '0 0 0 0.5em',
  '@media screen and (min-width: 601px)': {
    borderLeft: '0',
    color: '#fff',
    fontSize: '4em',
    position: 'absolute',
    left: '-220%',
    width: '180%',
    margin: 0,
    top: '43%',
    textAlign: 'right',
  }
};

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
  /*
  '@media screen and (min-width: 601px)': {
    color: '#fff',
  },
  */
};

var podcastAnchor = RCSS.cascade(sectionAnchor, {
  marginLeft: '1em',
  display: 'block',
});

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
  quote: RCSS.registerClass(quote),
  kidsPull: RCSS.registerClass(kidsPull),
  kidsList: RCSS.registerClass(kidsList),
  section: RCSS.registerClass(section),
  lastSection: RCSS.registerClass(lastSection),
  sectionAnchor: RCSS.registerClass(sectionAnchor),
  podcastAnchor: RCSS.registerClass(podcastAnchor),
  sectionTitle: RCSS.registerClass(sectionTitle),
  sectionName: RCSS.registerClass(sectionName),
};

