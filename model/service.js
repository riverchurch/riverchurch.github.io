var axios = require('axios');
var parseString = require('xml2js').parseString;
var nth = require('./../lib/nth');
var Promise = require('es6-promise').Promise;

// http://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
var currentWeek = function() {
  var d = new Date();
  var w = 7;
  d.setHours(0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || w));
  var date = (d - new Date(d.getFullYear(), 0, 1))
  return Math.ceil(((date / 8.64e7) + 1) / w);
};

var DEFAULT = {
  title: 'Jesus loves you.',
  description: 'he wants to bless you. he wants to serve you. i know it’s crazy. the king of the universe wants to serve you. the root of this desire is god’s heart to heal our heart. to repair and transform a broken relationship. we hope you’ll let him do that today. now.',
};

var cache = {};

function get() {
  var c = currentWeek();
  if (cache[c]) {
    return new Promise(function(resolve, reject) {
      resolve(cache[c]);
    });
  }
  return new Promise(function(resolve, reject) {
    axios
      .get('http://feeds.soundcloud.com/users/soundcloud:users:118020810/sounds.rss')
      .then(function(resp) {
        return parseString(resp.data, function(err, result) {
          var recent = result.rss.channel[0].item[0];
          var title = nth(recent.title[0].split(/\s+?-\s+?/), 1);
          var description = recent.description[0];
          cache[c] = {title: title, description: description};
          resolve(cache[c]);
        });
      }, function(err) {
        resolve(DEFAULT);
      })
      .catch(function (response) {
        resolve(DEFAULT);
      });
  });
}

module.exports = {
  get: get,
};
