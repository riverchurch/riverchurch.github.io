/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component, PropTypes} from 'react';
import {resolve} from 'react-resolver';

@resolve('service', props => (
  fetch(`${process.env.API_URL}/api/sunday-morning`).then(n => n.json())
))
class SundayMorning extends Component {
  static displayName = 'SundayMorning';

  static propTypes = {
    service: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    service: {
      title: 'TODO',
      description: 'TODO',
    },
  };

  render(): ReactElement {
    var {title, description} = this.props.service;

    return (
      <section id="sunday-morning" className={styles.sundayMorning}>
        <div className={styles.image}>
          <p className={styles.quote}>a place to belong and become like Jesus</p>
        </div>
        <div className={styles.content}>
          <h2 className={styles.header}>Sunday Mornings</h2>
          <div className={styles.section}>
            <em className={styles.sectionName}>current series</em>
            <strong className={styles.sectionTitle}>{title}<br /></strong>
            <p className={styles.p}>{description}</p>
          </div>
          <div className={styles.section}>
            <span className={styles.sectionName}>listen to our podcast</span>
            <p>
              <a className={styles.podcastAnchor} href="https://soundcloud.com/rivercharlotte/">
                <img src="/public/images/icon-soundcloud.svg" width="40px" alt="soundcloud" />
              </a>
              <a className={styles.podcastAnchor} href="https://itunes.apple.com/us/podcast/river-church-charlotte-podcast/id559791603?mt=2">
                <img src="/public/images/icon-itunes.svg" width="40px" alt="iTunes" />
              </a>
            </p>
          </div>
          <div className={styles.section}>
            <span className={styles.sectionName}>music</span>
            <strong className={styles.sectionTitle}>river church live</strong>
            <p className={styles.p}>Listen to our live worship album <a href="http://www.deepwaterworship.com" className={styles.oneHopeAnchor}>One Hope</a>.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default SundayMorning;

