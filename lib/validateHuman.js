var axios = require('axios');

module.exports = function(request) {
  var payload = request.payload;

  return axios({
    url: 'https://www.google.com/recaptcha/api/siteverify',
    params: {
      secret: process.env.RECAPTCHA,
      response: payload['g-recaptcha-response'],
      remoteip: request.info.address || request.info.remoteAddress,
    },
  })
  .then(function(resp) {
    if (!resp.data.success) {
      return handleBot();
    }
    return true;
  }, handleBot);

  function handleBot() {
    delete payload['g-recaptcha-response'];
    request.server.log('info', 'Non-verified contact: ' + JSON.stringify(payload));
    throw new Error('Request is not validated as a human.');
  }
};
