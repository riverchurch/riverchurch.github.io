/** @flow */
'use strict';

require('./styles.css');

import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

class NotFound extends Component {
  render(): ReactElement {
    return (
      <div>
        Welcome NotFound
        <RouteHandler />
      </div>
    );
  }
}

export default NotFound;

