import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/COSTV">COS.TV</NavLink></li>
        <li><NavLink to="/BTC">BTC Trend</NavLink></li>
        <li><NavLink to="/AI">AI</NavLink></li>
        <li><NavLink to="/Expo">Expo</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
