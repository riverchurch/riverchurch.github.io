var React = require('react');
var Kid = React.createClass({
  render() {
    var c = this.props.data;
    console.log(this.props);
    return (
      <section data-class={c.name.toLowerCase()} className={"kids__bubble kids__bubble--is-" + c.name.toLowerCase()}>
        <span className="kids__name">{c.age}</span>
        <strong className="kids__title">{c.name}</strong>
      </section>
    );
    //- img(src="images/kids-#{c.name.tolowercase().replace(' ', '')}.svg" alt='#{c.name}. #{c.age}')
  }
});

module.exports = Kid;
