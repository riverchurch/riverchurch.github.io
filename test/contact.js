var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var server = require('../');

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

function validContactPayload() {
  return {
    name: 'Hapi Test',
    email: 'hapiriverchurch@test.com',
    'life-status': 'Single',
    'prayer': '',
  };
}

describe('contact', function () {
  it('validates', function (done) {
    var options = {
      method: 'POST',
      url: '/contact',
      payload: {
        name: 'George Lucas the first',
        email: '47',
        phone: '234567',
        'life-status': 'hello',
      }
    };

    server.inject(options, function(response) {
      var result = response.result;
      var messages = result.message.split('.');
      expect(response.statusCode).to.equal(400);
      expect(result.error).to.equal('Bad Request');
      expect(messages).to.have.length(4);

      done();
    });
  });

  it('responds successfully', function (done) {
    var options = {
      method: 'POST',
      url: '/contact',
      payload: validContactPayload()
    };

    server.inject(options, function(response) {
      var result = response.result;
      expect(response.statusCode).to.equal(200);
      expect(result).to.equal('Thank you.');

      done();
    });
  });

  it('saves to the database', function (done) {
    var options = {
      method: 'POST',
      url: '/contact',
      payload: validContactPayload()
    };

    server.inject(options, function(response) {
      var result = response.result;
      expect(response.statusCode).to.equal(200);
      expect(result).to.equal('Thank you.');

      done();
    });
  });
});

