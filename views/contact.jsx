var React = require('react');
var css = require('../styles/contact');
var Floater = require('./components/floater/index.jsx');

// require window.fetch polyfill
if (typeof window !== 'undefined') {
  require('es6-promise');
  require('fetch');
}

var toJSON = resp => resp.json();
var isLast = (array, i) => i === array.length - 1;

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
      if (data.statusCode && data.statusCode !== 200) {
        this.setState({
          errors: data.message.split('.')
        });
      }
      else {
        this.setState({
          completedMessage: data.message,
          errors: this.state.errors.slice(this.state.errors.length)
        });
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
        <div className={css.successMessage.className}>{this.state.completedMessage}</div>
      );
    }

    var errors = this.state.errors
      .filter(e => !e.match('is not allowed to be empty'))
      .map((e, i, arr) => {
        var selector = isLast(arr, i) ? 'lastErrorMessage' : 'errorMessage';
        return (<div className={css[selector].className} key={e}>{e}</div>);
      });

    return (
      <form action="/contact" method="post" onSubmit={this.handleSubmit}>
        {errors}
        <Floater label="full name" onChange={this.updateState} />
        <Floater label="email" onChange={this.updateState} />
        <Floater label="phone number" id="phone" onChange={this.updateState} />
        <Floater input={'textarea'} rows="5" label="how can we pray for you?" id="prayer" onChange={this.updateState} />
        <Floater input={'textarea'} rows="5" label="how can we best serve you?" id="whatcha-need" onChange={this.updateState} />
        <div className="g-recaptcha" data-sitekey="6Lf4UwATAAAAAOdJAztEdOEz9EPoNJi7Yt007mUY"></div>
        <button className={css.button.className} type="submit">send</button>
      </form>
    );
  }
});

module.exports = ContactForm;
