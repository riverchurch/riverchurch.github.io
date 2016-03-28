/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component, PropTypes} from 'react';
import {resolve} from 'react-resolver';
import SectionHeader from 'SectionHeader';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

var styleFor = (event) => (
  event.name === '10:00am Service' ? {backgroundColor: '#666'} :
  event.name === 'Current Youth' ? {backgroundColor: '#33B2AF'} : null
);

function renderEvent(event: mixed): ReactElement {
  var {
    day,
    month,
    time,
    name,
    description,
    where,
  } = event;

  return (
    <div key={event.id + month + day} className={styles.event}>
      <div className={styles.date} style={styleFor(event)}>
        <span className={styles.month}>{month}</span>
        <span className={styles.day}>{day}</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.header}>{name}</h2>
        <div
          className={styles.innerContent}
          dangerouslySetInnerHTML={{__html: description}} />
        <div className={styles.subContent}>
          {time && <span>{time}</span>}
          {where && (
            <span>
              <i className="ion-location"></i>
              {where}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}


@resolve('events', props => (
  fetch(`${process.env.API_URL}/api/calendar`).then(n => n.json())
))
class Events extends Component {
  static displayName = 'Events';

  render(): ReactElement {
    if (!Array.isArray(this.props.events) || this.props.events.length === 0) {
      return null;
    }

    return (
      <div className={styles.block} id="events">
        <SectionHeader>upcoming events</SectionHeader>
        {this.props.events.map(renderEvent)}
      </div>
    );
  }
}

export default Events;

