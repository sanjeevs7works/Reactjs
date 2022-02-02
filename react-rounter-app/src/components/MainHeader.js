import { Link, NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <na>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/products'>
              Product
            </NavLink>
          </li>
        </ul>
      </na>
    </header>
  );
};
export default MainHeader;
