import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './app.jsx';
import reducer from './reducers/reducers';

//store
var store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk)
  )
);

//render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
