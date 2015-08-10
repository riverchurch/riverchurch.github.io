/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component, PropTypes} from 'react';
import Kid from 'Kid';

class Kids extends Component {
  render(): ReactElement {
    return (
      <section className={styles.block}>
        <div className={styles.content}>
          <h2 className={styles.header}>river kids</h2>
          <div className={styles.innerContent}>
            <p>We value children because God values children. We lead with passion and have been trained and equipped to share God’s love in a captivating way.</p>
            <div className={styles.quote}>
              <p>Teaching children to embrace God’s love and hear His voice.</p>
            </div>
            <div className={styles.list}>
              {this.props.kids.map(k => <Kid key={k.name} data={k} />)}
            </div>
          </div>
        </div>
        <div className={styles.image}></div>
      </section>
    );
  }
}

Kids.propTypes = {
  kids: PropTypes.array.isRequired,
};

Kids.defaultProps = {
  kids: [
    {
      name: 'Little Guppies',
      age: '6 weeks — 24 months',
    },
    {
      name: 'Minnows',
      age: '2 — 3-year-olds',
    },
    {
      name: 'Lily Pad',
      age: '4-year-olds — Kindergarten',
    },
    {
      name: 'Splash',
      age: '1 — 6th-grade',
    },
  ]
};

export default Kids;
