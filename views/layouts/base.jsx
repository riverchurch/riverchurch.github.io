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
          <meta description="A place to belong and become like Jesus. Sunday at 10:00 am." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
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
          <script dangerouslySetInnerHTML={{__html: "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-32386434-1', 'auto');ga('send', 'pageview');"}}></script>
        </body>
      </html>
    );
  }
});

module.exports = Layout;
