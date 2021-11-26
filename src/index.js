import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { apiUrl } from './helper/config'
import App from './App';

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
  config.headers.Authorization = token;

  return config;
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
