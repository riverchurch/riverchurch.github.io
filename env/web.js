require('isomorphic-fetch');

import React from 'react';
import {Router} from 'react-router';
import {Resolver} from 'react-resolver';
import {browserHistory} from 'react-router';

import routes from '../routes';

Resolver.render(
  () => <Router history={browserHistory} children={routes} />,
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

