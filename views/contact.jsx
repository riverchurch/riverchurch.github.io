var React = require('react');
var css = require('../styles/contact');
var Floater = require('../components/floater.jsx');

var ContactForm = React.createClass({
  render() {
    return (
      <form action="/contact" method="post">
        <Floater label="name" />
        <Floater label="email" />
        <Floater label="phone number" id="phone" />
        <Floater label="life status" />
        <Floater input={'textarea'} rows="5" label="prayer requests?" id="prayer" />
        <Floater input={'textarea'} rows="5" label="how can we best serve you?" id="watcha-need" />
        <button className={css.button.className} type="submit">send</button>
      </form>
    );
  }
});

module.exports = ContactForm;
