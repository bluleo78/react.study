import React from 'react';
import PropTypes from 'prop-types';

import ChatHistoryView from './ChatHistoryView';
import ChatUserListView from './ChatUserListView';
import ChatInputView from './ChatInputView';

class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: props.userName },
      users: [],
      messages: [],
      ...props.initialState,
    };
  }

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

  render() {
    const { currentUser, users, messages } = this.state;
    const styleView = { width: 300, minHeight: 500, margin: 20 };
    const styleBody = { height: 450, margin: 10 };
    const styleHistory = {
      width: 200, height: 450, outlineStyle: 'solid', outlineWidth: 'thin', float: 'left',
    };
    const styleUserList = {
      marginLeft: 10, width: 70, height: 450, outlineStyle: 'solid', outlineWidth: 'thin', float: 'left',
    };
    const styleFooter = {
      height: 50, outlineStyle: 'solid', outlineWidth: 'thin', margin: 10, float: 'clear',
    };

    return (
      <div style={styleView}>
        <div style={styleBody}>
          <div style={styleHistory}>
            <ChatHistoryView currentUser={currentUser} messages={messages} />
          </div>
          <div style={styleUserList}>
            <ChatUserListView currentUser={currentUser} users={users} />
          </div>
        </div>
        <div style={styleFooter}>
          <ChatInputView onSubmitMessage={this.handleSubmitChatInput} />
        </div>
      </div>
    );
  }
}


ChatView.propTypes = {
  userName: PropTypes.string.isRequired,
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
  }),
};

ChatView.defaultProps = {
  initialState: {},
};

export default ChatView;
