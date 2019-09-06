
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <Nav
        activeKey = "/"
        onSelect = {(key) => this.props.history.push(key)} 
      >
        <Nav.Item>
          <Nav.Link eventKey = "/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey = "/product">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey = "/game">Game</Nav.Link>
        </Nav.Item>
      </Nav>
      ); 
  }
}

export default withRouter(Header);