import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import fieldReducer from './ReducerField'; 
import Field from './field';

const reducers = combineReducers({
  field: fieldReducer 
});

const store = createStore(reducers);


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue='Hello' />
  </Provider>,
  document.getElementById('app')
)
