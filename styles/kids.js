var RCSS = require('rcss');

var header = {
  color: '#fff',
  margin: 0,
  padding: '0.666em 1.5rem',
  '@media screen and (min-width: 601px)': {
    background: '#33b2af',
    fontSize: '1em',
  },
};

var quote = {
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

var list = {
  margin: '0.33em 0 0.33em 1em',
};

module.exports = {
  header: RCSS.registerClass(header),
  list: RCSS.registerClass(list),
  quote: RCSS.registerClass(quote),
};
