import React from 'react';

function UserMessage({ name, message }) {
  return (
    <div>
      <p>{`${name} says "${message}"`}</p>
    </div>
  );
}

export default UserMessage;
