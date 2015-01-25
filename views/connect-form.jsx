var React = require('react');
var css = require('../styles/contact');
var radioCss = require('./components/radio/styles');
var Floater = require('./components/floater/index.jsx');
var Radio = require('./components/radio/index.jsx');

// require window.fetch polyfill
if (typeof window !== 'undefined') {
  require('es6-promise');
  require('fetch');
}

var DIVIDER = {margin: '2em 0'};

var toJSON = resp =>  resp.json();

var ContactForm = React.createClass({
  getInitialState() {
    return {
      'full-name': '',
      'street-address': '',
      'city-state-zip': '',
      'phone-number': '',
      'life-status': '',
      'gender': '',
      'email': '',
      'birthday': '',
      'twitter': '',
      'facebook': '',
      'instagram': '',
      'regularity': '',
      'prayer': '',
      'whatcha-need': '',
      'god-is-doing': '',
      'errors': [],
      'completedMessage': '',
    };
  },

  handleSubmit(event) {
    if (typeof window === 'undefined') return;
    var self = this;

    event.preventDefault();
    var form = this.getDOMNode();
    var {action, method} = form;
    window.fetch(action, {
      method: method,
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
    .then(toJSON)
    .then(data => {
      if (data.statusCode !== 200) {
        this.setState({errors: data.message.split('.')});
      }
      else {
        this.setState({completedMessage: data.message});
      }
    });
  },

  updateState(e) {
    var o = {};
    var {name, value} = e.target;
    o[name] = value;
    this.setState(o);
  },

  updateRadio(e) {
    var o = {};
    var {name, value} = e.target;
    o[name] = value;
    if (value === this.state[name]) o[name] = '';
    this.setState(o);
  },

  render() {
    var {className} = this.props;

    if (this.state.completedMessage) {
      return (
        <div className={className}>{this.state.completedMessage}</div>
      );
    }

    return (
      <form className={className} action="/contact" method="post" onSubmit={this.handleSubmit}>
        {this.state.errors.map(e => <div key={e}>{e}</div>)}
        <Floater label="full name" onChange={this.updateState} />
        <Floater label="street address" onChange={this.updateState} />
        <Floater label="city, state, zip" onChange={this.updateState} />
        <Floater label="phone number" type="number" id="phone" onChange={this.updateState} />
        <div className={radioCss.fieldset.className}>
          <label className={css.label__hasContent.className}>Life Status</label>
          <Radio checked={this.state['life-status'] === 'single'} name="life-status" id="life-status--s" onChange={this.updateRadio} value="single">Single</Radio>
          <Radio checked={this.state['life-status'] === 'married'}  name="life-status" id="life-status--m" onChange={this.updateRadio} value="married">Married</Radio>
          <Radio checked={this.state['life-status'] === 'single-again'}  name="life-status" id="life-status--sa" onChange={this.updateRadio} value="single-again">Single Again</Radio>
        </div>
        <div className={radioCss.fieldset.className}>
          <label className={css.label__hasContent.className}>Gender</label>
          <Radio checked={this.state['gender'] === 'male'} name="gender" id="gender--m" onChange={this.updateRadio} value="male">Male</Radio>
          <Radio checked={this.state['gender'] === 'female'}  name="gender" id="gender--f" onChange={this.updateRadio} value="female">Female</Radio>
          <Radio checked={this.state['gender'] === 'na'}  name="gender" id="gender--na" onChange={this.updateRadio} value="na">Rather not say</Radio>
        </div>
        <div style={DIVIDER}></div>
        <Floater label="email" type="email" onChange={this.updateState} />
        <Floater label="birthday" onChange={this.updateState} />
        <div style={DIVIDER}></div>
        <Floater label="twitter" onChange={this.updateState} />
        <Floater label="facebook" onChange={this.updateState} />
        <Floater label="instagram" onChange={this.updateState} />
        {/*TODO: kids*/}
        <div style={DIVIDER}></div>
        <div className={radioCss.fieldset.className}>
          <label className={css.label__hasContent.className}>{' '}</label>
          <Radio checked={this.state['regularity'] === '1'} name="regularity" id="regularity--1" onChange={this.updateRadio} value="1">This is my first time here</Radio>
          <Radio checked={this.state['regularity'] === '2'}  name="regularity" id="regularity--2" onChange={this.updateRadio} value="2">This is my second time here</Radio>
          <Radio checked={this.state['regularity'] === '3'}  name="regularity" id="regularity--3" onChange={this.updateRadio} value="3">This is my third time here</Radio>
          <Radio checked={this.state['regularity'] === 'home'}  name="regularity" id="regularity--home" onChange={this.updateRadio} value="home">This is my home</Radio>
        </div>
        <div style={DIVIDER}></div>
        <Floater input={'textarea'} rows="5" label="how can we pray for you?" id="prayer" onChange={this.updateState} />
        <Floater input={'textarea'} rows="5" label="what is God doing in your life?" id="god-is-doing" onChange={this.updateState} />
        <Floater input={'textarea'} rows="5" label="questions? comments?" id="comments" onChange={this.updateState} />
        <button className={css.button.className} type="submit">send</button>
      </form>
    );
  }
});

module.exports = ContactForm;
