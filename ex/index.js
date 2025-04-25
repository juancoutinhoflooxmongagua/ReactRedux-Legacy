import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
  field: fieldReducer 
});

const store = createStore(reducers);


ReactDOM.render(
  <Provider store={createStore(reducers)}>
  </Provider>,
  document.getElementById('app')
)
