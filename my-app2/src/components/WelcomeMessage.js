import React from 'react';

function WelcomeMessage({ name, unreadMsgCnt }) {
  return (
    <div>
      <p>{`Welcome, ${name}. You have ${unreadMsgCnt || 0} messages`}</p>
    </div>
  );
}

export default WelcomeMessage;
