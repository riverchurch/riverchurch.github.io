var RCSS = require('rcss');

var base = {
  backgroundSize: 'cover',
  display: 'inline-block',
  padding: '2em 5%',
  verticalAlign: 'top',
};

var kidsBlock = RCSS.cascade(base, {
  '@media screen and (min-width: 600px)': {
    display: 'inline-block',
    padding: '2em 5%',
    verticalAlign: 'top',
    background: 'url(../images/kids.jpg)',
    backgroundSize: 'cover',
    marginLeft: '60%',
    width: '40%',
  }
});

var kidsContent = {
  '@media screen and (min-width: 600px)': {
    position: 'relative',
    right: '180%',
    width: '120%',
    color: '#000',
  }
};

var sundaysBlock = RCSS.cascade(base, {
  '@media screen and (min-width: 600px)': {
    background: 'url(../images/sunday.jpg)',
    backgroundSize: 'cover',
    padding: '2em 5%',
    marginRight: '4%',
    width: '60%',
  }
});

var sundaysContent = {
  '@media screen and (min-width: 600px)': {
    position: 'relative',
    left: '120%',
    width: '50%',
    color: '#000',
  }
};

var staff = {
  margin: '0 auto',
  padding: 0,
  overflow: 'hidden',
  '@media screen and (min-width: 601px)': {
    marginTop: '1.5em',
    padding: '1.5em',
    borderTop: '10px solid rgba(157, 90, 75, 0.06)',
  },
};

var contact = {
  margin: '0 auto',
  maxWidth: '800px',
  padding: '3em 10% 3em',
};

var contactTitle = {
  color: '#1dc7ba',
};

module.exports = {
  kids: RCSS.registerClass(kidsBlock),
  kidsContent: RCSS.registerClass(kidsContent),
  sundays: RCSS.registerClass(sundaysBlock),
  sundaysContent: RCSS.registerClass(sundaysContent),
  staff: RCSS.registerClass(staff),
  contact: RCSS.registerClass(contact),
  contactTitle: RCSS.registerClass(contactTitle),
};
