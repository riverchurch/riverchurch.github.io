var React = require('react');
var style = require('../styles/kid');

var Kid = React.createClass({
  render() {
    var {age, name} = this.props.data;
    return (
      <section className={style.mod.className}>
        <span className={style.age.className}>{age}</span>
        <strong className={style.name.className}>{name}</strong>
      </section>
    );
    //- img(src="images/kids-#{c.name.tolowercase().replace(' ', '')}.svg" alt='#{c.name}. #{c.age}')
  }
});

module.exports = Kid;
