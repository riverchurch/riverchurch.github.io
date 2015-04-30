var RCSS = require('rcss');

var MEDIA_QUERY = '@media screen and (min-width: 600px)';

var logo = {
  fill: '#fff',
  margin: '0 auto 10%',
};

var hero = {
  background: '#01386b',
  color: '#fff',
  height: 'calc(100vh)',
  overflow: 'hidden',
  padding: '3em 5%',
  position: 'relative',
  textAlign: 'center',
  zIndex: '0',
  '@media screen and (max-width: 600px)': {
    textAlign: 'left',
  },
  '@media screen and (max-width: 766px)': {
    height: 'auto',
  },
};

var heroTitle = {
  fontSize: '3em',
  margin: '0.1em auto 0 auto',
  opacity: '0.95',
  textShadow: '0 0 2px rgba(0, 0, 0, 0.333)',
  textTransform: 'uppercase',
}

var heroImage = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  minWidth: '100%',
  minHeight: '100%',
  maxWidth: '200%',
  transition: 'opacity 1s ease-in',
  zIndex: '-1',
}

var heroReadMore = {
  color: '#fff',
  fontSize: '1.25em',
  position: 'absolute',
  left: 0,
  right: 0,
  textAlign: 'center',
  bottom: '0.333em',
};

var bigHitterList = {
  listStyle: 'none',
  margin: '20% 0 0',
  padding: '0',
  '@media screen and (min-width: 767px)': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    '-webkit-justify-content': 'space-between',
    '-ms-flex-pack': 'justify',
    'justify-content': 'space-between',
    padding: '0.666em 0.666em 1.5em',
  }
};

var bigHitterItem = {
  display: 'block',
  textAlign: 'left',
  padding: '0.5em 0',
  '@media screen and (max-width: 766px)': {
    clear: 'left',
  },
  '@media screen and (min-width: 767px)': {
    flex: 1,
    textAlign: 'center',
    verticalAlign: 'top',
  },
};

var bigHitterIcon = {
  fontSize: '3.25em',
  float: 'left',
  lineHeight: 0,
  margin: '0 0.25em 0.25em 0',
};

var bigHitterText = {
  color: '#b4b4b4',
  display: 'block',
  fontSize: '0.75em',
  '@media screen and (min-width: 767px)': {
    color: '#137771',
  },
  '@media screen and (max-width: 766px)': {
    color: '#fff',
  },
};

var bigHitterTitle = RCSS.cascade(bigHitterText, {
  color: '#fff',
  fontSize: '1.333em',
  '@media screen and (min-width: 767px)': {
    color: '#137771',
    fontSize: '1.1666em',
  }
});

var bigHitterButton = {
  color: '#fff',
  textDecoration: 'none',
 '@media screen and (min-width: 767px)': {
    display: 'inline-block',
    textAlign: 'left',
    width: '80%',
  },
};

module.exports = {
  logo: RCSS.registerClass(logo),
  hero: RCSS.registerClass(hero),
  heroTitle: RCSS.registerClass(heroTitle),
  heroImage: RCSS.registerClass(heroImage),
  heroReadMore: RCSS.registerClass(heroReadMore),
  bigHitterList: RCSS.registerClass(bigHitterList),
  bigHitterItem: RCSS.registerClass(bigHitterItem),
  bigHitterIcon: RCSS.registerClass(bigHitterIcon),
  bigHitterText: RCSS.registerClass(bigHitterText),
  bigHitterTitle: RCSS.registerClass(bigHitterTitle),
  bigHitterButton: RCSS.registerClass(bigHitterButton),
};
