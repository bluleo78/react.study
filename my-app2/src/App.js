import React from 'react';

import LoginView from './components/LoginView';
import ChatView from './components/ChatView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    };
  }

  handleSubmitLogin = (userName) => {
    this.setState({ userName });
  };

  render() {
    const { userName } = this.state;
    return (
      <>
        {!userName ? (<LoginView onSubmitLogin={this.handleSubmitLogin} />) : null}
        {userName ? (<ChatView userName={userName} />) : null}
      </>
    );
  }
}

export default App;
