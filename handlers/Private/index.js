/** @flow */
import React, {Component} from 'react';
import Map from './Map';
import Header from 'Header';

class Private extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}

export default Private;

