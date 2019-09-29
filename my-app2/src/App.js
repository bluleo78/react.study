import React from 'react';
import PropTypes from 'prop-types';

import LoginView from './components/LoginView';
import ChatView from './components/ChatView';
import UserInfoView from './components/UserInfoView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUserName: '',
      currentUser: null,
      users: [{ name: 'Mary' }],
      messages: [],
      ...props.initialState,
    };
  }

  handleSubmitLogin = (userName) => {
    this.setState({ currentUser: { name: userName } });
  };

  handleSubmitChatInput = (text) => {
    this.setState((state) => ({
      messages: [...state.messages, {
        id: new Date().getTime(),
        type: 'user',
        sender: state.currentUser.name,
        text,
      }],
    }));
  };

  handleSelectUser = (userName) => {
    this.setState({ selectedUserName: userName });
  };

  handleChangeUser = (userName) => {
    if (userName) {
      this.setState({ currentUser: { name: userName }, selectedUserName: null });
    } else {
      this.setState({ selectedUserName: null });
    }
  };

  render() {
    const {
      currentUser, users, messages, selectedUserName,
    } = this.state;
    return (
      <>
        {!currentUser ? (<LoginView onSubmitLogin={this.handleSubmitLogin} />) : null}
        {currentUser && !selectedUserName
          ? (
            <ChatView
              currentUser={currentUser}
              users={users}
              messages={messages}
              onSubmitChatInput={this.handleSubmitChatInput}
              onSelectUser={this.handleSelectUser}
            />
          ) : null}
        {currentUser && selectedUserName
          ? (
            <UserInfoView
              currentUser={currentUser}
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
    currentUser: PropTypes.shape({
      name: PropTypes.string,
    }),
    users: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      sender: PropTypes.string,
      receiver: PropTypes.string,
      text: PropTypes.string,
    })),
    selectedUserName: PropTypes.string,
  }),
};

App.defaultProps = {
  initialState: {},
};

export default App;
