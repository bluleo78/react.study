import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';


function routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={RouteHome} />
        <Route path={['/about', '/game']} component={RouteMain} />
      </Switch>
    </div>
  );
}


function RouteHome() {
  return (
    <Home/>
  );
}


function RouteMain() {
  return (
    <div>
      <Header/>
      <Route path='/about' component={About} />
      <Route path='/game' component={Game} />
    </div>
  );
}

export default routes;