var React = require('react');
var BaseLayout = require('./layouts/base.jsx');
var Logo = require('./logo.jsx');
var layout = require('../styles/layout');
var header = require('../styles/header');
var section = require('../styles/section');
var footer = require('../styles/footer');
var ConnectForm = require('./connect-form.jsx');
var css = require('../styles/connect-card');

var Root = React.createClass({
  render() {
    return (
      <BaseLayout module="connect">
        <Logo fill="#555" className={css.logo.className} />
        <ConnectForm className={layout.contact.className} />
      </BaseLayout>
    );
  }
});

module.exports = Root;

