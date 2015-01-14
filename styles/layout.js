var RCSS = require('rcss');

var base = {
  backgroundSize: 'cover',
  display: 'inline-block',
  padding: '2em 5%',
  verticalAlign: 'top',
};

var kidsBlock = RCSS.cascade(base, {
  '@media screen and (min-width: 600px)': {
    backgroundSize: 'cover',
    display: 'inline-block',
    padding: '2em 5%',
    verticalAlign: 'top',
    background: 'url(../images/kids.png)',
    marginLeft: '60%',
    width: '40%',
  }
});

var sundaysBlock = RCSS.cascade(base, {
  '@media screen and (min-width: 600px)': {
    backgroundSize: 'cover',
    padding: '2em 5%',
    background: 'url(../images/sunday.png)',
    marginRight: '4%',
    width: '60%',
  }
});

var sundaysContent = {
  '@media screen and (min-width: 600px)': {
    position: 'relative',
    left: '120%',
    width: '60%',
    color: '#000',
  }
};

var staff = {
  margin: '0 auto',
  padding: 0,
  overflow: 'hidden',
  '@media screen and (min-width: 601px)': {
    width: '90%',
  },
  '@media screen and (min-width: 1000px)': {
    width: '90%',
  },
};

var contact = {
  padding: '3em 1.333em 3em',
}

module.exports = {
  kids: RCSS.registerClass(kidsBlock),
  sundays: RCSS.registerClass(sundaysBlock),
  sundaysContent: RCSS.registerClass(sundaysContent),
  staff: RCSS.registerClass(staff),
  contact: RCSS.registerClass(contact),
};
