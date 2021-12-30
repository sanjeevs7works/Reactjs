import { Fragment } from 'react';

import headerImage from '../../assest/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
   return (
      <Fragment>
         <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onShow={props.onCartShow} />
         </header>
         <div className={classes['main-image']}>
            <img src={headerImage} alt='A table is full of delicious meals' />
         </div>
      </Fragment>
   );
};

export default Header;
