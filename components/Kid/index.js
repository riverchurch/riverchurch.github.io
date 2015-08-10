/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component, PropTypes} from 'react';

class Kid extends Component {
  render(): ReactElement {
    var {age, name} = this.props.data;
    return (
      <section className={styles.block}>
        <span className={styles.age}>{age}</span>
        <strong className={styles.name}>{name}</strong>
      </section>
    );
  }
}

Kid.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Kid;
