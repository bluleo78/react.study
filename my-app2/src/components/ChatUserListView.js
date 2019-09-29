/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './ChatUserListView.css';


function ChatUserListView(props) {
  const {
    currentUser, selectedUserName, users = [], onSelectUser,
  } = props;

  function handleSelectListItem(e) {
    onSelectUser(e.currentTarget.dataset.id);
  }

  const userListItems = users
    .filter((user) => !currentUser || currentUser.name !== user.name)
    .map((user) => {
      const selectedStyle = user.name === selectedUserName
        ? 'user-list-view__item--selected' : null;
      return (
        <li
          key={user.name}
          className={selectedStyle}
          onClick={handleSelectListItem}
          data-id={user.name}
        >
          {user.name}
        </li>
      );
    });

  if (currentUser) {
    const selectedStyle = currentUser.name === selectedUserName
      ? 'user-list-view__item--selected' : null;
    userListItems.splice(0, 0, (
      <li
        key={currentUser.name}
        className={selectedStyle}
        onClick={handleSelectListItem}
        data-id={currentUser.name}
      >
        Me
      </li>
    ));
  }

  return (
    <div>
      <ul className="user-list-view__list">
        {userListItems}
      </ul>
    </div>
  );
}


ChatUserListView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  selectedUserName: PropTypes.string,
  onSelectUser: PropTypes.func,
};

ChatUserListView.defaultProps = {
  currentUser: null,
  users: [],
  selectedUserName: '',
  onSelectUser: () => null,
};

export default ChatUserListView;
