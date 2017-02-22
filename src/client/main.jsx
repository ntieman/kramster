import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import routes from './routes';
import './main.css';

const store = createStore(reducers);

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('app'),
);
