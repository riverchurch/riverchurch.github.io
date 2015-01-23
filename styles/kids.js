var RCSS = require('rcss');

var innerContent = {
  '@media screen and (min-width: 601px)': {
    maxWidth: '400px',
    paddingLeft: '10%',
    paddingRight: '1.5em',
    textAlign: 'left',
  }
};

var header = {
  color: '#fff',
  margin: 0,
  padding: '0.666em 1.5rem',
  '@media screen and (min-width: 601px)': {
    background: '#33b2af',
    fontSize: '1em',
    paddingLeft: '10%',
    textAlign: 'left',
  },
};

var quote = {
  color: '#363636',
  fontFamily: 'serif',
  fontSize: '1.333em',
  fontWeight: 'bold',
  fontStyle: 'italic',
  '@media screen and (min-width: 601px)': {
    background: '#f4f4f4',
    fontSize: '1.666em',
    padding: '0.333em 0.333em 0.333em 0',
    position: 'relative',
    width: '160%',
    zIndex: 1,
  },
};

var list = {
  margin: '0.33em 0 0.33em 1em',
};

var block = {};

var content = {
  '@media screen and (min-width: 601px)': {
    color: '#000',
    display: 'inline-block',
    textAlign: 'right',
    verticalAlign: 'top',
    width: '50%',
  }
};

var image = {
  '@media screen and (min-width: 601px)': {
    background: 'url(../images/kids.jpg) no-repeat scroll 80% 0% / cover',
    display: 'inline-block',
    verticalAlign: 'top',
    minHeight: '600px',
    width: '50%',
  }
};

module.exports = {
  block: RCSS.registerClass(block),
  content: RCSS.registerClass(content),
  innerContent: RCSS.registerClass(innerContent),
  header: RCSS.registerClass(header),
  list: RCSS.registerClass(list),
  quote: RCSS.registerClass(quote),
  image: RCSS.registerClass(image),
};
