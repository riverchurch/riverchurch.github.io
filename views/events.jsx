var React = require('react');
var Kid = require('./kid.jsx');

var styles = require('../styles/events');
var layout = require('../styles/layout');
var section = require('../styles/section');

var MONTHS = [
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

var styleFor  = function(event) {
  if (event.name === '10:00am Service') return {backgroundColor: '#666'};
  if (event.name === 'Current Youth') return {backgroundColor: '#33B2AF'};
};

var Events = React.createClass({
  renderEvent(event) {

    var date = new Date(event.start_date.split(' ')[0]);
    var month = MONTHS[date.getMonth() - 1];
    var day = date.getDate();
    var time;
    var description = /Dustan/.test(event.description) ?
      '<p>Join us at ' + event.where + '.</p>'
      : event.description;

    return (
      <div key={event.id + month + day} className={styles.block.className}>
        <div className={styles.date.className} style={styleFor(event)}>
          <span className={styles.month.className}>{month}</span>
          <span className={styles.day.className}>{day}</span>
        </div>
        <div className={styles.content.className}>
          <h2 className={styles.header.className}>{event.name}</h2>
          <div
            className={styles.innerContent.className + ' __elvanto'}
            dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </div>
    );
  },

  render() {
    return (
      <div className={styles.mod.className}>
        <h1 className={layout.contactTitle.className}>upcoming events</h1>
        {this.props.events.map(this.renderEvent)}
      </div>
    );
  }
});

module.exports = Events;

