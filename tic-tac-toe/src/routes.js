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
        <Route path="/about" component={RouteAbout} />
        <Route path="/game" component={RouteGame} />
      </Switch>
    </div>
  );
}


function RouteHome() {
  return (
    <Home/>
  );
}


function RouteAbout() {
  return (
    <div>
      <Header/>
      <About/>
    </div>
  );
}


function RouteGame() {
  return (
    <div>
      <Header/>
      <Game/>
    </div>
  );
}

export default routes;