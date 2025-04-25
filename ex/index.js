import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './CounterReducer';
import Counter from './counter';

const reducers = combineReducers({
  CounterReducer: CounterReducer
});

const store = createStore(reducers);


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>,
  document.getElementById('app')
)
