import './bootstrap';
import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import client from './apolloClient';
import Dispatcher from './App';
// import registerServiceWorker from './sw';

// Init VK AppregisterServiceWorker
connect.send('VKWebAppInit', {});

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT 
// registerServiceWorker();

ReactDOM.render((
  <ApolloProvider client={client}>
    <Dispatcher/>
  </ApolloProvider>
), document.getElementById('root'));
