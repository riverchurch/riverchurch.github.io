var React = require('react');
var layout = require('../styles/layout');
var header = require('../styles/header');
var section = require('../styles/section');
var footer = require('../styles/footer');
var ConnectForm = require('./connect-form.jsx');

var Root = React.createClass({
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>River Church Charlotte</title>
          <meta description="A church in Charlotte amazed by grace, declaring and demonstrating the love of God, the life of faith, and the hope of salvation." />
          <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Raleway:300,700" />
          <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css" />
          <link rel="stylesheet" href="/public/css/all.css" />
        </head>
        <body>
          <section id="connect-with-us" className={layout.contact.className}>
            <h1>connect with us</h1>
            <ConnectForm />
          </section>

          <footer className={footer.footer.className}>
            <p>copyright &copy; {new Date().getFullYear()} river church charlotte</p>
          </footer>
          <script src="/public/js/main.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Root;

