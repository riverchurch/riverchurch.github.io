var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var server = require('../');

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var SUCCESS_MESSAGE =  'We have received your message and are thankful you have contacted us.';

function validContactPayload() {
  return {
    'full-name': 'Hapi Test',
    email: 'hapiriverchurch@test.com',
    phone: '2345678901',
    'prayer': '',
  };
}

describe('contact', function () {
  it('validates', function (done) {
    var options = {
      method: 'POST',
      url: '/contact',
      payload: {
        'full-name': 'George Lucas the first',
        email: '47',
        phone: '234567',
      }
    };

    server.inject(options, function(response) {
      var result = response.result;
      var messages = result.message.split('.');
      expect(response.statusCode).to.equal(400);
      expect(result.error).to.equal('Bad Request');
      expect(messages).to.have.length(2);

      done();
    });
  });

  it('responds successfully with json', function (done) {
    var options = {
      method: 'POST',
      url: '/contact',
      payload: validContactPayload(),
      headers: {
        accept: 'application/json',
      },
    };

    server.inject(options, function(response) {
      var result = response.result;
      expect(response.statusCode).to.equal(200);
      expect(result.message).to.equal(SUCCESS_MESSAGE);

      done();
    });
  });

  it('responds successfully with html', function (done) {
    var options = {
      method: 'POST',
      url: '/contact',
      payload: validContactPayload(),
    };

    server.inject(options, function(response) {
      var result = response.result;
      expect(response.statusCode).to.equal(200);
      expect(result).to.match(/^<!DOCTYPE html>/);

      done();
    });
  });
});

