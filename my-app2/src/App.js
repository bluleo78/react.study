import React from 'react';
import PropTypes from 'prop-types';

import LoginView from './components/LoginView';
import ChatView from './components/ChatView';
import UserInfoView from './components/UserInfoView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      selectedUserName: '',
      ...props.initialState,
    };
  }

  handleSubmitLogin = (userName) => {
    this.setState({ userName });
  };

  handleSelectUser = (userName) => {
    this.setState({ selectedUserName: userName });
  };

  handleChangeUser = (userName) => {
    this.setState({ userName, selectedUserName: null });
  };

  render() {
    const { userName, selectedUserName } = this.state;
    return (
      <>
        {!userName ? (<LoginView onSubmitLogin={this.handleSubmitLogin} />) : null}
        {userName && !selectedUserName
          ? (
            <ChatView
              userName={userName}
              onSelectUser={this.handleSelectUser}
              initialState={{
                users: [{ name: 'Mary' }],
              }}
            />
          ) : null}
        {userName && selectedUserName
          ? (
            <UserInfoView
              userName={userName}
              selectedUserName={selectedUserName}
              onChangeUser={this.handleChangeUser}
            />
          ) : null}
      </>
    );
  }
}


App.propTypes = {
  initialState: PropTypes.shape({
    userName: PropTypes.string,
    selectedUserName: PropTypes.string,
  }),
};

App.defaultProps = {
  initialState: {},
};

export default App;
