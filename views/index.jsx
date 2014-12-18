var React = require('react');
var Kid = require('./kid.jsx');
var Staff = require('./staff.jsx');
var ContactForm = require('./contact.jsx');

var Root = React.createClass({
  render() {
    var {kids, staff} = this.props;

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
          <link rel="stylesheet" href="css/main.css" />
        </head>
        <body>
          <section id="hero">
            {/* include logo.svg.jade */}
            <h1 className="hero-1">welcome home</h1>
            <ul className="big-hitters">
              <li className="hero-2">
                <a href="https://www.google.com/maps/preview?q=mallard+creek+rec+center&ie=utf-8&ei=e6flu-kxa8xmsaswwydqdq&ved=0cagq_auoaq">
                  <i className="icon ion-map"></i>
                  <span className="bh__title">mallard creek rec center</span>
                  <span>worship at 10:00 am</span>
                </a>
              </li>
              <li className="hero-3">
                <a href="https://riverchurchcharlotte.elexiopulse.com/default.aspx#giving" className="btn btn--is-link">
                  <i className="icon ion-cash"></i>
                  <span className="bh__title">give online</span>
                  <span>requires an elexio account</span>
                </a>
              </li>
              <li className="hero-4">
                <a href="https://calendar.google.com">
                  <i className="icon ion-calendar"></i>
                  <span className="bh__title">upcoming events</span>
                </a>
              </li>
            </ul>
            <a href="#staff" className="read-more ion-chevron-down" aria-label="Scroll to Staff"></a>
            <img id="hero-1" src="images/hero.png" />
          </section>
          <div className="some-may-call-this-a-belt">
            <section id="sunday-morning">
              <h2>sunday mornings</h2>
              <p className="quote">a place to belong and become like jesus</p>
              <section>
                <em className="section__name">this sunday</em>
                <strong className="section__title">jesus is inviting you to a banquet!!<br /></strong>
                <p>
                  jesus loves you. he wants to bless you. he wants to serve you. i
                  know it&rsquo;s crazy. the king of the universe wants to serve you.
                  the root of this desire is god&rsquo;s heart to heal our heart. to
                  repair and transform a broken relationship. we hope you&rsquo;ll let
                  him do that today. now.
                </p>
              </section>
              <section>
                <span className="section__name">podcasts</span>
                <strong className="section__title">can’t make it in person?<br /></strong>
                <p><a href="http://itunes">listen to our podcast</a></p>
              </section>
              <section>
                <span className="section__name">music</span>
                <strong className="section__title">
                  <a href="http://www.deepwaterworship.com">river church live<br /></a>
                </strong>
                <p>
                  preview our album, <em>1 hope</em>, to experience the living
                  worship of our family.
                </p>
              </section>
            </section>
            <section id="kids">
              <h2>river kids</h2>
              {kids.map(k => <Kid data={k} />)}
            </section>
          </div>
          <section id="staff">
            {staff.map(s => <Staff data={s} />)}
          </section>

          <section id="connect-with-us">
            <h1>connect with us</h1>
            <ContactForm />
          </section>

          <footer id="footer">
            <p>copyright &copy; 2014 river church charlotte</p>
          </footer>
        </body>
      </html>
    );
  }
});

module.exports = Root;

