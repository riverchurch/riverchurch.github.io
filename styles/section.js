var RCSS = require('rcss');

var quote = {
  color: '#202020',
  fontFamily: 'serif',
  fontSize: '1.333em',
  fontWeight: 'bold',
  fontStyle: 'italic',
  borderLeft: '4px solid #999',
  padding: '0 0 0 0.5em',
};

/*
.quote:before,
.quote:after {
  font-size: 1.5em;
  line-height: 0.666;
  vertical-align: bottom;
}
*/

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
};

var sectionName = {
  color: '#555',
  display: 'block',
  fontSize: '0.916666em',
  fontFamily: 'serif',
  fontStyle: 'italic',
  fontWeight: 'bold',
  marginBottom: '0.333em',
};

/*
.section__name:after {
  content: ':';
}
*/
//var SELECTORS = [quote, section, lastSection, sectionAnchor, sectionName];

module.exports = {
  quote: RCSS.registerClass(quote),
  section: RCSS.registerClass(section),
  lastSection: RCSS.registerClass(lastSection),
  sectionAnchor: RCSS.registerClass(sectionAnchor),
  sectionName: RCSS.registerClass(sectionName),
};

