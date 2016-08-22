import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import renderFullHTMLPage from './renderFullHTMLPage';
import App from './src/components/app';
import axios from 'axios';
import path from 'path';

const server = express();
server.disable('x-powered-by');
server.use(express.static(path.join(__dirname, '/')));
server.get('/favicon.ico', (req, res) => res.send(''));

server.get('/', async (req, res) => {
  try {
    const API_KEY = 'ENTER API KEY HERE!!!!';

    const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

    const URL = `${ROOT_URL}&q=Sydney`;
    const request = await axios.get(URL);

    const store = configureStore({ data: request.data });

    const intialHTML = renderToString(
      <Provider store={store}>
        <App />
      </Provider>);
    const state = store.getState();

    res.send(renderFullHTMLPage(intialHTML, state));
  } catch (err) {
    /* eslint-disable */
    console.error('error', err);
    /* eslint-enable */

    res.status(500).send(`${err}`);
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log('listening on ', PORT));
