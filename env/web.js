require('isomorphic-fetch');

import React from 'react';
import Router from 'react-router';
import {Resolver} from 'react-resolver';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import routes from '../routes';

var history = new BrowserHistory();

Resolver.render(
  () => <Router history={history} children={routes} />,
  document.getElementById('app')
);

// clean up the __REACT_RESOLVER_PAYLOAD__ rehydration script
(function() {
  var tmp = document.getElementById('__resolver__');
  if (tmp) {
    console.log('remove that thing');
    /*
    Object.keys(window.__REACT_RESOLVER_PAYLOAD__).forEach(
      key => {
        try {
          delete window.__REACT_RESOLVER_PAYLOAD__[key];
        }
        catch(e) {
          console.log('set %s to ""', key);
          window.__REACT_RESOLVER_PAYLOAD__[key] = '';
        }
      }
    );
    */
    tmp.parentNode.removeChild(tmp);
  }
})();

