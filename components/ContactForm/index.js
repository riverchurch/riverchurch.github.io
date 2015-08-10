/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import 'es6-promise';
import 'isomorphic-fetch';

import React, {Component, PropTypes} from 'react';
import SectionHeader from 'SectionHeader';
import Floater from 'Floater';

import ga from 'ga';

var toJSON = resp => resp.json();
var isLast = (array, i) => i === array.length - 1;

class ContactForm extends Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {
      'full-name': '',
      'email': '',
      'phone-number': '',
      'prayer': '',
      'whatcha-need': '',
      'errors': [],
      'completedMessage': '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleSubmit(event: mixed): void {
    if (typeof window === 'undefined') return;

    event.preventDefault();
    var form = this.refs.form;
    var {action, method} = form;
    ga('send', 'event', 'contact', 'form', 'submit', 1);
    fetch(action, {
      method: method,
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
    .then(toJSON)
    .then(data => {
      if (data.statusCode && data.statusCode !== 200) {
        ga('send', 'event', 'contact', 'form', 'error', 1);
        this.setState({
          errors: data.message.split('.'),
        });
      }
      else {
        ga('send', 'event', 'contact', 'form', 'success', 1);
        this.setState({
          completedMessage: data.message,
          errors: this.state.errors.slice(this.state.errors.length),
        });
      }
    });
  }

  updateState(event: mixed): void {
    var {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(): ReactElement {
    if (this.state.completedMessage) {
      var children = (
        <div className={styles.successMessage}>{this.state.completedMessage}</div>
      );
    }
    else {
      var errors = this.state.errors
        .filter(e => !e.match('is not allowed to be empty'))
        .map((e, i, arr) => {
          var selector = isLast(arr, i) ? 'lastErrorMessage' : 'errorMessage';
          return (<div className={styles[selector]} key={e}>{e}</div>);
        });

      children = (
        <form ref="form" action="/contact" method="post" onSubmit={this.handleSubmit}>
          {errors}
          <Floater label="full name" onChange={this.updateState} />
          <Floater label="email" onChange={this.updateState} />
          <Floater label="phone number" id="phone" onChange={this.updateState} />
          <Floater input={'textarea'} rows="5" label="how can we pray for you?" id="prayer" onChange={this.updateState} />
          <Floater input={'textarea'} rows="5" label="how can we best serve you?" id="whatcha-need" onChange={this.updateState} />
          <div className="g-recaptcha" data-sitekey="6Lf4UwATAAAAAOdJAztEdOEz9EPoNJi7Yt007mUY"></div>
          <button className={styles.button} type="submit">send</button>
        </form>
      );
    }

    return (
      <section className={styles.module}>
        <SectionHeader>connect with us</SectionHeader>
        {children}
      </section>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
