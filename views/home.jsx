var React = require('react');
var BaseLayout = require('./layouts/base.jsx');
var Kid = require('./kid.jsx');
var Staff = require('./staff.jsx');
var ContactForm = require('./contact.jsx');
var SundayMorning = require('./sunday.jsx');
var layout = require('../styles/layout');
var header = require('../styles/header');
var section = require('../styles/section');
var footer = require('../styles/footer');
var Logo = require('./logo.jsx');

var Root = React.createClass({
  getDefaultProps() {
    // rehydrate
    if (typeof window === 'undefined') {
      return {};
    }

    var props = window.__rehydration;
    delete window.__rehydration;
    return props;
  },

  render() {
    var {kids, staff, sunday} = this.props;

    return (
      <BaseLayout module="home" rehydration={this.props}>
        <section id="hero" className={header.hero.className}>
          <Logo />
          <h1 className={header.heroTitle.className}>welcome home</h1>
          <ul className={header.bigHitterList.className}>
            <li className={header.bigHitterItem.className}>
              <a className={header.bigHitterButton.className} href="https://www.google.com/maps/preview?q=mallard+creek+rec+center&ie=utf-8&ei=e6flu-kxa8xmsaswwydqdq&ved=0cagq_auoaq">
                <i className={header.bigHitterIcon.className + ' ion-map'}></i>
                <span className={header.bigHitterTitle.className}>sunday at 10 am</span>
                <span className={header.bigHitterText.className}>mallard creek rec center</span>
              </a>
            </li>
            <li className={header.bigHitterItem.className}>
              <a className={header.bigHitterButton.className} href="http://pushpay.com/pay/riverchurchcharlotte">
                <img style={{width: 50, height: 50}} src="/public/images/icon-pushpay.svg" className={header.bigHitterIcon.className} />
                <span className={header.bigHitterTitle.className}>give online</span>
                <span className={header.bigHitterText.className}>powered by Pushpay</span>
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
          <a href="#sunday-morning" className={header.heroReadMore.className + ' ion-chevron-down'} aria-label="Scroll to Staff"></a>
          <img className={header.heroImage.className} src="/public/images/hero.jpg" />
        </section>

        <SundayMorning title={sunday.title} description={sunday.description} />

        <section className={layout.kids.className}>
          <div className={layout.kidsContent.className}>
            <h2>river kids</h2>
            <p>We value children because God values children.</p>
            <p>We lead with passion and have been trained and equipped to share God’s love in a captivating way.</p>
            {/*<p><i>We can think of no greater way to love and support you than to love your children.</i></p>*/}
            <p>At River Kids we seek to…</p>
            <ul>
              <li className={section.kidsList.className}>Train up a generation who knows their Father</li>
              <li className={section.kidsList.className}>Instill a love for King Jesus</li>
              <li className={section.kidsList.className}>Teach our kids how to hear from Holy Spirit</li>
              <li className={section.kidsList.className}>Empower a generation to walk in the freedom and life of the Kingdom</li>
              <li className={section.kidsList.className}>Create a safe place where love rules and church is fun!</li>
            </ul>
            <div className={section.kidsPull.className}>
              {kids.map(k => <Kid key={k.name} data={k} />)}
            </div>
          </div>
        </section>

        <section id="staff" className={layout.staff.className}>
          {staff.map(s => <Staff key={s.twitter} data={s} />)}
        </section>

        <section id="connect-with-us" className={layout.contact.className}>
          <h1 className={layout.contactTitle.className}>connect with us</h1>
          <ContactForm />
        </section>
        <script src='https://www.google.com/recaptcha/api.js' async></script>
      </BaseLayout>
    );
  }
});

module.exports = Root;
