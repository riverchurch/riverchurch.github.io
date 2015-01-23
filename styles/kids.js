var RCSS = require('rcss');

var innerContent = {
  '@media screen and (max-width: 600px)': {
    padding: '0 1.5rem',
  },
  '@media screen and (min-width: 601px)': {
    maxWidth: '400px',
    paddingLeft: '10%',
    paddingRight: '1.5em',
    textAlign: 'left',
  }
};

var header = {
  background: '#33b2af',
  color: '#fff',
  fontSize: '1em',
  margin: 0,
  padding: '0.666em 1.5rem',
  '@media screen and (max-width: 600px)': {
    borderBottom: '3px solid #229592',
    marginTop: '1.5em',
  },
  '@media screen and (min-width: 601px)': {
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
  '@media screen and (max-width: 600px)': {
    marginBottom: '5em',
  },
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
