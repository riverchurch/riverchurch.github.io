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
    flex: '1 1 auto',
    background: 'url(../images/kids.png)',
    width: '36%',
  }
});

var sundaysBlock = RCSS.cascade(base, {
  '@media screen and (min-width: 600px)': {
    backgroundSize: 'cover',
    display: 'inline-block',
    padding: '2em 5%',
    verticalAlign: 'top',
    flex: '2 2 auto',
    background: 'url(../images/kids.png)',
    background: 'url(../images/sunday.png)',
    marginRight: '4%',
    width: '60%',
  }
});

var theBelt = {
  '@media screen and (min-width: 600px)': {
    display: 'flex',
    color: '#fff',
    maxWidth: '1400px',
    padding: '4%',
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
  theBelt: RCSS.registerClass(theBelt),
  staff: RCSS.registerClass(staff),
  contact: RCSS.registerClass(contact),
};
