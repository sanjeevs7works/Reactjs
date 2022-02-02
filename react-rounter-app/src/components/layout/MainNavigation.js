import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Greate Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={classes.active} to='/quotes'>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.active} to='/new-quotes'>
              Add a Quote
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
