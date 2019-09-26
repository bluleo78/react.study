import React from 'react';

import WelcomeMessage from './WelcomeMessage';
import UserMessage from './UserMessage';
import JoinMessage from './JoinMessage';

function ChatHistoryView({ currentUser, messages = [] }) {
  const messageList = messages.map((msg) => {
    if (msg.type === 'welcome') {
      if (currentUser && msg.receiver === currentUser.name) {
        return (<WelcomeMessage key={msg.id} name={currentUser.name} unreadMsgCnt={0} />);
      }

      return (<JoinMessage key={msg.id} name={msg.receiver} />);
    }

    return (<UserMessage key={msg.id} name={msg.sender} message={msg.text} />);
  });

  return (
    <div>
      {messageList}
    </div>
  );
}

export default ChatHistoryView;
