import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './Home';
import Dog from './Dog'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/dog' component={Dog}/>
    </Switch>
  </main>
)

export default Main;