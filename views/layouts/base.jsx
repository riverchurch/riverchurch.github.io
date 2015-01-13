var React = require('react');
var footer = require('../../styles/footer');

var Layout = React.createClass({
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>River Church Charlotte</title>
          <meta description="A church in Charlotte amazed by grace, declaring and demonstrating the love of God, the life of faith, and the hope of salvation." />
          <link rel="stylesheet" href="//cloud.typography.com/6462332/785266/css/fonts.css" />
          <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css" />
          <link rel="stylesheet" href="/public/css/all.css" />
        </head>
        <body>
          {this.props.children}
          <footer className={footer.footer.className}>
            <p>copyright &copy; {new Date().getFullYear()} river church charlotte</p>
          </footer>
          <script dangerouslySetInnerHTML={{__html: 'var __rehydration = ' + JSON.stringify(this.props.rehydration) + ';'}}></script>
          <script src={`/public/js/${this.props.module}.js`}></script>
        </body>
      </html>
    );
  }
});

module.exports = Layout;
