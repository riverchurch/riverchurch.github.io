import axios from 'axios';
import btoa from 'btoa';
import moment from 'moment';

const DAY = 1000 * 60 * 60 * 24;
const pad = n => n < 10 ? `0${n}` : `${n}`;

// Elvantos default calendar name
const DEFAULT_CALENDAR = 'Sunday Morning Service';

// TODO: refactor all this out now that we added moment
const date = function(d) {
  if (!(d instanceof Date)) {
    var resolver = date.resolve[typeof d] || date.resolve['default'];
    d = resolver(d);
  }
  return [d.getFullYear(), date.pad(d.getMonth() + 1), pad(d.getDate())].join('-');
};

date.pad = pad;
date.resolve = {
  string: function(d) { return Date.parse(d); },
  'undefined': function(d) { return new Date(); },
  'default': function(d) { return new Date(d); },
};

const currentWeek = function() {
  var d = new Date();
  var w = 7;
  d.setHours(0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || w));
  var date = (d - new Date(d.getFullYear(), 0, 1))
  return Math.ceil(((date / 8.64e7) + 1) / w);
};

var cache = {};

const formatResponse = function(event) {
  const startDate = moment(event.start_date).subtract(4, 'hour');
  const endDate = event.end_date && moment(event.end_date).subtract(4, 'hour');

  return {
    id: event.id,
    name: event.name,
    description: /Dustan/.test(event.description) ?
      '<p>Join us at ' + event.where + '.</p>'
      : event.description,
    where: event.where,
    color: event.color,
    picture: event.picture,
    url: event.url,
    time: `${startDate.format('h:mm a')}${endDate ? ' - ' + endDate.format('h:mm a') : ''}`,
    month: startDate.format('MMM'),
    day: startDate.format('D'),
  };
}

export default function() {
  var c = currentWeek();
  if (cache[c]) {
    return new Promise(function(resolve, reject) {
      resolve(cache[c]);
    });
  }

  return axios({
    method: 'POST',
    url: 'https://api.elvanto.com/v1/calendar/events/getAll.json',
    data: {
      start: date(),
      end: date(Date.now() + DAY * 45),
      fields: ['locations', 'assets'],
    },
    headers: {
      'Authorization': 'Basic ' + (
        btoa(
          (process.env.ELVANTO_API_KEY ||
          require('./../../../.config').ELVANTO_API_KEY) + ':'
        )
      )
    },
  }).then(
    resp => (
      cache[c] = resp.data.events.event
        .filter(n => n.name !== DEFAULT_CALENDAR)
        .map(formatResponse)
    ),
    n => (console.log('error', n), n)
  );
};
