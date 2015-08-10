/** @flow */
'use strict';

// weird stuff to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component} from 'react';

class AppBase extends Component {
  render(): ReactElement {
    return (
      <div>
        {this.props.children}
        <footer className={styles.footer}>
          <p>
            copyright &copy; {new Date().getFullYear()} river church charlotte
            |
            (704) 900-3303
          </p>
        </footer>
      </div>
    );
  }
}

export default AppBase;

