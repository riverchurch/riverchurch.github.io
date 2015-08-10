/** @flow */
import React, {Component} from 'react';
import api from 'api';
import Header from 'Header';
import SundayMorning from 'SundayMorning';
import Events from 'Events';
import Kids from 'Kids';
import Staff from 'Staff';
import ContactForm from 'ContactForm';

class Home extends Component {
  render(): ReactElement {
    return (
      <div>
        <Header />
        <SundayMorning />
        <Kids />
        <Staff />
        <Events />
        <ContactForm />
      </div>
    );
  }
}

export default Home;

