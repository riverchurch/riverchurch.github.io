var RCSS = require('rcss');

var BASE_LAYOUT = {
  '@media screen and (min-width: 601px)': {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'top',
    width: '50%',
  },
};

var image = RCSS.cascade(BASE_LAYOUT, {
  '@media screen and (min-width: 600px)': {
    background: 'url(../images/sunday.jpg)',
    backgroundSize: 'cover',
    padding: '2em 0',
  },
});

var content = RCSS.cascade(BASE_LAYOUT, {
  '@media screen and (min-width: 601px)': {
    position: 'relative',
    color: '#000',
  },
});

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
  color: '#262626',
  fontFamily: 'serif',
  fontSize: '1.333em',
  fontWeight: 'bold',
  fontStyle: 'italic',
  /*
  borderLeft: '4px solid #999',
  padding: '0 0 0 0.5em',
  */
  '@media screen and (min-width: 601px)': {
    background: '#f4f4f4',
    fontSize: '1.666em',
    margin: '60% 0 1.5em 30%',
    padding: '0.75em 0.75em',
    textAlign: 'right',
  },
};

var section = {
  borderBottom: '1px solid #999',
  margin: '0 1.5rem',
  padding: '0.6666em 0',
  maxWidth: '400px',
};

var lastSection = RCSS.cascade(section, {
  borderBottom: '0 none',
});

var podcastAnchor = {
  color: '#002759',
  textDecoration: 'none',
  display: 'inline-block',
  marginRight: '1em',
  verticalAlign: 'middle',
};

var p = {
  marginTop: 0,
};

var oneHopeAnchor = {
  color: '#33b2af',
  fontStyle: 'italic',
};

module.exports = {
  image: RCSS.registerClass(image),
  content: RCSS.registerClass(content),
  header: RCSS.registerClass(header),
  p: RCSS.registerClass(p),
  quote: RCSS.registerClass(quote),
  section: RCSS.registerClass(section),
  lastSection: RCSS.registerClass(lastSection),
  podcastAnchor: RCSS.registerClass(podcastAnchor),
  oneHopeAnchor: RCSS.registerClass(oneHopeAnchor),
};

