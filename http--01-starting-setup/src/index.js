import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.default.baseURL = 'https://jsonplaceholder.typicode.com/';

axios.interceptors.request.use((request => {
  console.log(request);
  // Here ypu can change the request.
  return request;
}));

axios.interceptors.response.use(res => {
  console.log(res);
  return res;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
