import Joi from 'joi';
import validateHuman from './lib/validateHuman';

export const validate = {
  options: {abortEarly: false},
  payload: {
    'full-name': Joi.string().min(3).max(30).label('Full Name'),
    email: Joi.string().email().label('Email'),
    phone: Joi.string().min(7).max(12).label('Phone'),
    prayer: Joi.string().optional().allow('').label('Prayer'),
    'whatcha-need': Joi.string().optional().allow('').label('How can we best serve you?'),
    'g-recaptcha-response': Joi.string().allow(''),
  }
};

export const handler = (request, reply) => {
  var {payload} = request;

  validateHuman(request).then(isHuman => {
    var data = {
      from: payload.email,
      to: process.env.MAILER_TO,
      subject: 'RiverCharlotte.com Contact Form',
      html: {
        path: 'ContactEmail.jsx'
      },
      context: payload,
    };

    var Mailer = request.server.plugins.mailer || request.server.plugins['hapi-mailer'];
    if (Mailer) {
      if (request.server.log) {
        request.server.log('info', 'Sending mail', data);
      }

      Mailer.send(data, function(err, info) {
        if (err) request.server.log('error', err);
        else request.server.log('info', 'Mail sent.', info);
      });
    }

    switch (request.headers.accept) {
    case 'application/json':
      reply({message: 'We have received your message and are thankful you have contacted us.'}).code(200);
      break;
    default:
      // TODO: handle js free thank you view
      service.get().then(function(sunday) {
        reply.view('home', {sunday: sunday, message: 'Thank you.'})
          .header('Content-Type', 'text/html;charset=UTF-8');
      });
    }
  }, () => (
    reply({message: 'Sure. We have received your message and are thankful you have contacted us.'}).code(200)
  ));
};

