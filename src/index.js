import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ), document.getElementById('root'));

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
require("./index.html");

ReactDOM.render(<App/>, document.getElementById('root'));
*/


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