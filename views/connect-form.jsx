var React = require('react');
var css = require('../styles/contact');
var Floater = require('../components/floater.jsx');

// require window.fetch polyfill
if (typeof window !== 'undefined') {
  require('es6-promise');
  require('fetch');
}

var toJSON = resp =>  resp.json();

var ContactForm = React.createClass({
  getInitialState() {
    return {
      'full-name': '',
      'email': '',
      'phone-number': '',
      'prayer': '',
      'whatcha-need': '',
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

  render() {
    if (this.state.completedMessage) {
      return (
        <div>{this.state.completedMessage}</div>
      );
    }

    return (
      <form action="/contact" method="post" onSubmit={this.handleSubmit}>
        {this.state.errors.map(e => <div key={e}>{e}</div>)}
        <Floater label="full name" onChange={this.updateState} />
        <Floater label="street address" onChange={this.updateState} />
        <Floater label="city, state, zip" onChange={this.updateState} />
        <Floater label="phone number" id="phone" onChange={this.updateState} />
        <Floater label="life-status" id="life-status" onChange={this.updateState} />
        <Floater label="email" onChange={this.updateState} />
        <Floater label="gender" onChange={this.updateState} />
        <Floater label="birthday" onChange={this.updateState} />
        <Floater label="twitter" onChange={this.updateState} />
        <Floater label="facebook" onChange={this.updateState} />
        <Floater label="instagram" onChange={this.updateState} />
        <div style={{height: '3px', background: '#ccc', margin: '2em 0'}}></div>
        <Floater input={'textarea'} rows="5" label="how can we pray for you?" id="prayer" onChange={this.updateState} />
        <Floater input={'textarea'} rows="5" label="what is God doing in your life?" id="god-is-doing" onChange={this.updateState} />
        <Floater input={'textarea'} rows="5" label="questions? comments?" id="comments" onChange={this.updateState} />
        <button className={css.button.className} type="submit">send</button>
      </form>
    );
  }
});

module.exports = ContactForm;
