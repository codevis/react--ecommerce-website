import React from 'react';
import ReactDOM from 'react-dom';
//Provider is a parent of all to use the store for all our app
import {Provider} from 'react-redux';
//br - make the router work correctly ,br used 
import {BrowserRouter} from 'react-router-dom';
//importing store from redux
import { PersistGate } from 'redux-persist/integration/react';
import {store , persistor} from './redux/store';
import App from './App';
import './index.css';


ReactDOM.render(
  //added store in provider to use all over the  app
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


