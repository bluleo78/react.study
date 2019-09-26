import React from 'react';

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
    };
  }

  handleSubmitChatInput = (text) => {
    this.setState((state) => ({
      messages: [...state.messages, {
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
          <ChatInputView onSubmit={this.handleSubmitChatInput} />
        </div>
      </div>
    );
  }
}

export default ChatView;
