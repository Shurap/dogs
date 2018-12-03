import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './Home';
import Dog from './Dog'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/dog/:breed/:subBreed?' component={Dog}/>
    </Switch>
  </main>
)

export default Router;