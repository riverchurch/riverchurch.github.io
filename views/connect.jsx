var React = require('react');
var BaseLayout = require('./layouts/base.jsx');
var Logo = require('./logo.jsx');
var layout = require('../styles/layout');
var header = require('../styles/header');
var section = require('../styles/section');
var footer = require('../styles/footer');
var ConnectForm = require('./connect-form.jsx');

var Root = React.createClass({
  render() {
    return (
      <BaseLayout module="connect">
        <Logo fill="#555" />
        <section id="connect-with-us" className={layout.contact.className}>
          <h1>connect with us</h1>
          <ConnectForm />
        </section>
      </BaseLayout>
    );
  }
});

module.exports = Root;

