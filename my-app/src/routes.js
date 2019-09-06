import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';

import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Game from './pages/Game';


function routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={RouteHome} />
        <Route path={['/product', '/game']} component={RouteMain} />
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
    <Container>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Route path='/product' component={Product} />
        <Route path='/game' component={Game} />
      </Row>
    </Container>
  );
}

export default routes;