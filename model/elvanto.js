var axios = require('axios');
var btoa = require('btoa');
var Promise = require('es6-promise').Promise;
var pad = function(n) {
  if (n < 10) return '0' + n;
  return n;
};
var date = function(d) {
  if (!(d instanceof Date)) {
    var resolver = date.resolve[typeof d] || date.resolve['default'];
    d = resolver(d);
  }
  return [d.getFullYear(), date.pad(d.getMonth() + 1), pad(d.getDate())].join('-');
};

date.pad = function(n) { return n < 10 ? '0' + n : '' + n; };
date.resolve = {
  string: function(d) { return Date.parse(d); },
  'undefined': function(d) { return new Date(); },
  'default': function(d) { return new Date(d); },
};

var DAY = 1000 * 60 * 60 * 24;

var currentWeek = function() {
  var d = new Date();
  var w = 7;
  d.setHours(0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || w));
  var date = (d - new Date(d.getFullYear(), 0, 1))
  return Math.ceil(((date / 8.64e7) + 1) / w);
};

var cache = {};

module.exports = function() {
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
          require('./../.config').ELVANTO_API_KEY) + ':'
        )
      )
    },
  }).then(
    function(resp) {
      var events = resp.data.events.event.filter(function(n) {
        // filter out Elvantos default calendars
        return n.name !== 'Sunday Morning Service';
      });
      cache[c] = events;
      return events;
    },
    function(n) {
      console.log('error', n);
    });
}
