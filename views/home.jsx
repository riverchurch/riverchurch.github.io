var React = require('react');
var BaseLayout = require('./layouts/base.jsx');
var Kid = require('./kid.jsx');
var Staff = require('./staff.jsx');
var ContactForm = require('./contact.jsx');
var CONTENT = require('../model/content');
var layout = require('../styles/layout');
var header = require('../styles/header');
var section = require('../styles/section');
var footer = require('../styles/footer');
var Logo = require('./logo.jsx');

var Root = React.createClass({
  getDefaultProps() {
    return CONTENT;
  },

  render() {
    var {kids, staff, sunday} = this.props;
    // TODO: make this isomorphically dynamic
    if (typeof sunday === 'undefined') {
      sunday = {
        title: 'Convinced',
        description: 'This series is all about getting convinced of God’s love for us and reorienting our lives to focus on what really matters.',
      };
    }

    return (
      <BaseLayout module="home">
        <section id="hero" className={header.hero.className}>
          <Logo />
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
              <a className={header.bigHitterButton.className} href="http://pushpay.com/pay/riverchurchcharlotte">
                <i className={header.bigHitterIcon.className + ' ion-cash'}></i>
                <span className={header.bigHitterTitle.className}>give online</span>
                <span className={header.bigHitterText.className}>with our partner PushPay</span>
              </a>
            </li>
            {/*
            <li className={header.bigHitterItem.className}>
              <a className={header.bigHitterButton.className} href="https://calendar.google.com">
                <i className={header.bigHitterIcon.className + ' ion-calendar'}></i>
                <span className={header.bigHitterTitle.className}>upcoming events</span>
              </a>
            </li>
            */}
          </ul>
          <a href="#staff" className={header.heroReadMore.className + ' ion-chevron-down'} aria-label="Scroll to Staff"></a>
          <img className={header.heroImage.className} src="/public/images/hero.png" />
        </section>
        <div className={layout.theBelt.className}>
          <section className={layout.sundays.className}>
            <h2>sunday mornings</h2>
            <p className={section.quote.className}>a place to belong and become like jesus</p>
            <div className={section.section.className}>
              <em className={section.sectionName.className}>last sunday</em>
              <strong className={section.sectionTitle.className}>{sunday.title}<br /></strong>
              <p>{sunday.description}</p>
            </div>
            <div className={section.section.className}>
              <span className={section.sectionName.className}>podcasts</span>
              <strong className={section.sectionTitle.className}>can’t make it in person?<br /></strong>
              <p><a className={section.sectionAnchor.className} href="https://soundcloud.com/rivercharlotte/">listen to our podcast</a></p>
            </div>
            <div className={section.lastSection.className}>
              <span className={section.sectionName.className}>music</span>
              <strong className={section.sectionTitle.className}>
                <a className={section.sectionAnchor.className} href="http://www.deepwaterworship.com">river church live<br /></a>
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
      </BaseLayout>
    );
  }
});

module.exports = Root;