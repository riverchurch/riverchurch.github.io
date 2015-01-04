var RCSS = require('rcss');

var kidsBlock = {
  padding: '1.333em',
  '@media screen and (min-width: 600px)': {
    backgroundSize: 'cover',
    display: 'inline-block',
    padding: '2em 5%',
    verticalAlign: 'top',
    flex: '1 1 auto',
    background: 'url(../images/kids.png)',
    width: '36%',
  }
};

var sundaysBlock = {
  padding: '1.333em',
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
};


module.exports = {
  kids: RCSS.registerClass(kidsBlock),
  sundays: RCSS.registerClass(sundaysBlock),
};
