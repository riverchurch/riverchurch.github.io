var RCSS = require('rcss');

var mod = {
  margin: '3em 10%',
  maxWidth: '800px',
};

var block = {
  borderBottom: '1px solid #3b3b3b',
  padding: '0.75em 0',
  marginLeft: '4.5em',
  position: 'relative',
};

var date = {
  background: '#33B2AF',
  borderRadius: '50%',
  color: '#fff',
  overflow: 'hidden',
  height: '3em',
  position: 'absolute',
  left: '-4.5em',
  padding: '0.666em 0',
  textAlign: 'center',
  width: '3em',
};

var month = {
  display: 'block',
  fontSize: '0.75em',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

var day = {
  display: 'block',
  fontSize: '0.875em',
  fontWeight: 900,
};

var content = {};
var header = {
  fontSize: '1em',
  marginTop: '0',
};

var innerContent = {};

module.exports = {
  mod: RCSS.registerClass(mod),
  block: RCSS.registerClass(block),
  date: RCSS.registerClass(date),
  month: RCSS.registerClass(month),
  day: RCSS.registerClass(day),
  content: RCSS.registerClass(content),
  innerContent: RCSS.registerClass(innerContent),
  header: RCSS.registerClass(header),
};
