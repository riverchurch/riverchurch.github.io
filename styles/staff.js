var RCSS = require('rcss');

var CHILD_BASE = {
  color: '#fff',
  display: 'block',
  position: 'relative',
  zIndex: 5,
};

var mod = {
  display: 'inline-block',
  margin: 0,
  minHeight: '160px',
  padding: '30% 0.41666em 1.5em',
  position: 'relative',
  textAlign: 'center',
  textShadow: '0 1px 5px rgba(0, 0, 0, 0.1666)',
  overflow: 'hidden',
  verticalAlign: 'top',
  '@media screen and (max-width: 600px)': {
    paddingTop: '30%',
    width: '50%',
  },
  '@media screen and (min-width: 601px)': {
    margin: '2.5%',
    width: '45%',
  },
  '@media screen and (min-width: 1000px)': {
    margin: '0 1.25%',
    width: '22.5%',
  }
};

var image = RCSS.cascade(CHILD_BASE, {
  position: 'absolute',
  marginLeft: '-10%',
  top: 0,
  width: '120%',
  zIndex: 0
});

var socialMedia = RCSS.cascade(CHILD_BASE, {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '1.333em',
  width: '1.333em',
  background: '#41a094',
  overflow: 'hidden',
});

var twitterIcon = {
  background: 'url(/public/images/icon-twitter.svg) no-repeat',
  backgroundSize: 'contain',
  display: 'block',
  margin: '15% 10% 5% 10%',
  maxWidth: '80%',
  maxHeight: '80%',
  textIndent: '-99em',
};

var name = RCSS.cascade(CHILD_BASE, {
  fontSize: '1.333em',
  fontWeight: 700,
  height: '2em',
  lineHeight: 1,
  '@media screen and (min-width: 1000px)': {
    fontSize: '1.666em',
  },
});

var bio = RCSS.cascade(CHILD_BASE, {
  display: 'none',
  fontSize: '0.91666em',
  fontWeight: 'normal',
});

var title = RCSS.cascade(CHILD_BASE, {});

// var SELECTORS = [mod, image, anchor, name, bio, title];

module.exports = {
  mod: RCSS.registerClass(mod),
  image: RCSS.registerClass(image),
  socialMedia: RCSS.registerClass(socialMedia),
  twitterIcon: RCSS.registerClass(twitterIcon),
  name: RCSS.registerClass(name),
  bio: RCSS.registerClass(bio),
  title: RCSS.registerClass(title),
};
