import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';
import renderFullHTMLPage from '../renderFullHTMLPage';
import App from '../src/components/app';
import path from 'path';

const server = express();
server.disable('x-powered-by');
server.use('/images', express.static(path.join(__dirname, '../src/assets/images')));
server.use('/scripts', express.static('built'));
server.use('/styles', express.static('lib'));
server.use('/built', express.static(path.join(__dirname, 'built')));
server.use('/built', express.static('built'));
server.use(express.static(path.join(__dirname, '../')));
server.get('/favicon.ico', (req, res) => res.send(''));

server.get('/', async (req, res) => {
  try {
    const data = [{ tileImage: 'http://res.cloudinary.com/kingoro/image/upload/v1479035464/image1.png', title: 'Classic Identity', descriptionTitle: 'Brand tone and voice' },];

    const store = configureStore({ data });

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
