'use strict';

try {
  Object.assign(process.env, require('./../.config'));
}
catch (e) {}

import Mailer from 'hapi-mailer';
import ReactViews from 'hapi-react-views';
import {join} from 'path';

export const register = Mailer;
export const options = {
  transport: {
   service: 'Mandrill',
   auth: {
     user: process.env.MAILER_USERNAME,
     pass: process.env.MAILER_PASSWORD,
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

