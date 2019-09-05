import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <button><Link to="/game">시작</Link></button>
    </div>
  );
}

export default Home;