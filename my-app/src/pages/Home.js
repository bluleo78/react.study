import React from 'react';
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Button onClick = {() => this.props.history.push('/game')}>시작</Button>
      </div>
    );
  }
}

export default withRouter(Home);