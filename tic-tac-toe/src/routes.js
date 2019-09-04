import React from "react";
import { Route } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';


function routes() {
  return (
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/game" component={Game} />
    </div>
  );
}


export default routes;