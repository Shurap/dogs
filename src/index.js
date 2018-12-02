import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/App'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  (
    <Provider store = {store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));


/*
import write from './App.js';

write('проверка');

async function readInfo(url) {
  const result = await fetch(url);
  const arr = await result.json();
  console.log(arr);
}

readInfo('https://dog.ceo/api/breeds/list/all');


*/