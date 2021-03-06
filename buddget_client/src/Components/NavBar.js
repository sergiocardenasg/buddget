import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/budgets"
      >
        Budgets
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/budgets/new"
      >
        Create New Budget
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/more"
      >
        More Resources
      </NavLink>
    </div>
  );
}

export default NavBar;