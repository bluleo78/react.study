import React from 'react';

function ChatUserListView({ currentUser, users = [] }) {
  const userListItems = users
    .filter((user) => !currentUser || currentUser.name !== user.name)
    .map((user) => (<p key={user.name}>{user.name}</p>));

  if (currentUser) userListItems.splice(0, 0, (<p>Me</p>));

  return (
    <div>
      {userListItems}
    </div>
  );
}

export default ChatUserListView;
