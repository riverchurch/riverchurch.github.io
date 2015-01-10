var React = require('react');
var style = require('../styles/kids');

var Kid = React.createClass({
  render() {
    var {age, name} = this.props.data;
    return (
      <section>
        <span className={style.name.className}>{age}</span>
        <strong>{name}</strong>
      </section>
    );
    //- img(src="images/kids-#{c.name.tolowercase().replace(' ', '')}.svg" alt='#{c.name}. #{c.age}')
  }
});

module.exports = Kid;
