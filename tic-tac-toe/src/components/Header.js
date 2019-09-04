import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/game">Game</Link>
      </li>
    </ul>
  );
}

export default Header;