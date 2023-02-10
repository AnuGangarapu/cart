import React from 'react';


import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux'
import Cart from './Components/Cart'
import cartReducer from './reducer';
import logger from 'redux-logger'

const store=createStore(cartReducer,applyMiddleware(logger))
//applyMiddleware(logger)


function App() {
  return (
    <Provider store={store}>
     <Cart/>
    </Provider>
  );
}

export default App;
