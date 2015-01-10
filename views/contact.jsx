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
      console.log(self === this, this);
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
    console.log('updating state', o);
    this.setState(o);
  },

  render() {
    console.log(this.state);
    if (this.state.completedMessage) {
      return (
        <div>{this.state.completedMessage}</div>
      );
    }

    return (
      <form action="/contact" method="post" onSubmit={this.handleSubmit}>
        {this.state.errors.map(e => <div key={e}>{e}</div>)}
        <Floater label="full name" onChange={this.updateState} />
        <Floater label="email" onChange={this.updateState} />
        <Floater label="phone number" id="phone" onChange={this.updateState} />
        <Floater input={'textarea'} rows="5" label="how can we pray for you?" id="prayer" onChange={this.updateState} />
        <Floater input={'textarea'} rows="5" label="how can we best serve you?" id="whatcha-need" onChange={this.updateState} />
        <button className={css.button.className} type="submit">send</button>
      </form>
    );
  }
});

module.exports = ContactForm;
