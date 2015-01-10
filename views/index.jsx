var React = require('react');
var Kid = require('./kid.jsx');
var Staff = require('./staff.jsx');
var ContactForm = require('./contact.jsx');
var CONTENT = require('../content');
var layout = require('../styles/layout');
var header = require('../styles/header');
var section = require('../styles/section');
var footer = require('../styles/footer');

var Root = React.createClass({

  getDefaultProps() {
    return CONTENT;
  },

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
          <link rel="stylesheet" href="/public/css/all.css" />
        </head>
        <body>
          <section id="hero" className={header.hero.className}>
            {/* include logo.svg.jade */}
            <h1 className={header.heroTitle.className}>welcome home</h1>
            <ul className={header.bigHitterList.className}>
              <li className={header.bigHitterItem.className}>
                <a className={header.bigHitterButton.className} href="https://www.google.com/maps/preview?q=mallard+creek+rec+center&ie=utf-8&ei=e6flu-kxa8xmsaswwydqdq&ved=0cagq_auoaq">
                  <i className={header.bigHitterIcon.className + ' ion-map'}></i>
                  <span className={header.bigHitterTitle.className}>mallard creek rec center</span>
                  <span className={header.bigHitterText.className}>worship at 10:00 am</span>
                </a>
              </li>
              <li className={header.bigHitterItem.className}>
                <a className={header.bigHitterButton.className} href="https://riverchurchcharlotte.elexiopulse.com/default.aspx#giving">
                  <i className={header.bigHitterIcon.className + ' ion-cash'}></i>
                  <span className={header.bigHitterTitle.className}>give online</span>
                  <span className={header.bigHitterText.className}>requires an elexio account</span>
                </a>
              </li>
              <li className={header.bigHitterItem.className}>
                <a className={header.bigHitterButton.className} href="https://calendar.google.com">
                  <i className={header.bigHitterIcon.className + ' ion-calendar'}></i>
                  <span className={header.bigHitterTitle.className}>upcoming events</span>
                </a>
              </li>
            </ul>
            <a href="#staff" className={header.heroReadMore.className + ' ion-chevron-down'} aria-label="Scroll to Staff"></a>
            <img className={header.heroImage.className} src="/public/images/hero.png" />
          </section>
          <div className={layout.theBelt.className}>
            <section className={layout.sundays.className}>
              <h2>sunday mornings</h2>
              <p className={section.quote.className}>a place to belong and become like jesus</p>
              <div className={section.section.className}>
                <em className="section__name">this sunday</em>
                <strong className="section__title">jesus is inviting you to a banquet!!<br /></strong>
                <p>
                  jesus loves you. he wants to bless you. he wants to serve you. i
                  know it&rsquo;s crazy. the king of the universe wants to serve you.
                  the root of this desire is god&rsquo;s heart to heal our heart. to
                  repair and transform a broken relationship. we hope you&rsquo;ll let
                  him do that today. now.
                </p>
              </div>
              <div className={section.section.className}>
                <span className={section.sectionName.className}>podcasts</span>
                <strong className="section__title">can’t make it in person?<br /></strong>
                <p><a href="http://itunes">listen to our podcast</a></p>
              </div>
              <div className={section.lastSection.className}>
                <span className={section.sectionName.className}>music</span>
                <strong className="section__title">
                  <a href="http://www.deepwaterworship.com">river church live<br /></a>
                </strong>
                <p>
                  preview our album, <em>1 hope</em>, to experience the living
                  worship of our family.
                </p>
              </div>
            </section>
            <section className={layout.kids.className}>
              <h2>river kids</h2>
              {kids.map(k => <Kid key={k.name} data={k} />)}
            </section>
          </div>

          <section id="staff" className={layout.staff.className}>
            {staff.map(s => <Staff key={s.twitter} data={s} />)}
          </section>

          <section id="connect-with-us" className={layout.contact.className}>
            <h1>connect with us</h1>
            <ContactForm />
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
