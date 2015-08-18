/** @flow */
'use strict';

import React, {Component} from 'react';

class NotFound extends Component {
  render(): ReactElement {
    return (
      <div>
        Welcome NotFound
        {this.props.children}
      </div>
    );
  }
}

export default NotFound;

