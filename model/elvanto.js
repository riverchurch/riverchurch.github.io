var axios = require('axios');
var btoa = require('btoa');
var date = function(d) {
  if (!(d instanceof Date)) {
    var resolver = date.resolve[typeof d] || date.resolve['default'];
    d = resolver(d);
  }
  return [d.getFullYear(), date.pad(d.getMonth() + 1), d.getDate()].join('-');
};

date.pad = function(n) { return n < 10 ? '0' + n : '' + n; };
date.resolve = {
  string: function(d) { return Date.parse(d); },
  'undefined': function(d) { return new Date(); },
  'default': function(d) { return new Date(d); },
};

console.log(process.env.ELVANTO_API_KEY);
module.exports = function() {
  return axios({
    method: 'POST',
    url: 'https://api.elvanto.com/v1/calendar/events/getAll.json',
    // url: 'https://api.elvanto.com/v1/groups/getAll.json',
    // url: 'https://api.elvanto.com/v1/people/getAll.json',
    data: {
      start: date(),
      end: date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      fields: ['locations', 'assets'],
    },
    headers: {
      'Authorization': 'Basic ' + (btoa(process.env.ELVANTO_API_KEY || require('./../.config').ELVANTO_API_KEY + ':'))
    },
  }).then(
    function(resp) {
      var events = resp.data.events;
      console.log('success', events);
    },
    function(n) {
      console.log('error', n);
    });
}
