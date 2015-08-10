import axios from 'axios';

export default function(request) {
  var {payload} = request;

  return axios({
    url: 'https://www.google.com/recaptcha/api/siteverify',
    params: {
      secret: process.env.RECAPTCHA,
      response: payload['g-recaptcha-response'],
      remoteip: request.info.address || request.info.remoteAddress,
    },
  })
  .then(
    resp => !resp.data.success ? handleBot() : true,
    handleBot
  )

  function handleBot() {
    delete payload['g-recaptcha-response'];
    request.server.log('info', 'Non-verified contact: ' + JSON.stringify(payload));
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Request is not human.');
    }
  }
};
