import './style/app.scss';

import './bootstrap';
import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import client from './apolloClient';
import App from './App';

connect.send('VKWebAppInit', {});

ReactDOM.render((
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
), document.getElementById('root'));
