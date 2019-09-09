import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';

import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Game from './pages/Game';
import Todo from './pages/Todo';


function routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={RouteHome} />
        <Route path={['/product', '/game', '/todo']} component={RouteMain} />
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
        <Route path='/todo' component={Todo} />
      </Row>
    </Container>
  );
}

export default routes;