'use strict';

try {
  Object.assign(process.env, require('./../.config'));
}
catch (e) {}

import Mailer from '@nesive/hapi-mailer';
import ReactViews from 'hapi-react-views';
import {join} from 'path';

export const register = Mailer.register;

export const options = {
  transport: {
    service: 'SendGrid',
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD,
    },
  },
  views: {
    engines: {
      jsx: ReactViews,
    },
    compileOptions: {
      useNodeJsx: false,
    },
    path: join(process.cwd(), 'mailer'),
  }
};

