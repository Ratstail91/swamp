import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './app.jsx';
import jukeboxReducer from './reducers/jukebox_reducer.js';
import DevTools from './dev_tools.jsx';

//store
var store = createStore(
  jukeboxReducer,
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
);

//render
ReactDOM.render(
  <Provider store={store}>
    <div className='page'>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.querySelector('#root')
);
