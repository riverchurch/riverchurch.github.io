/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component, PropTypes} from 'react';

class SectionHeader extends Component {
  render(): ReactElement {
    return (
      <this.props.element className={styles.header}>{this.props.children}</this.props.element>
    );
  }
}

SectionHeader.propTypes = {
  element: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

SectionHeader.defaultProps = {
  element: 'header',
};

export default SectionHeader;
