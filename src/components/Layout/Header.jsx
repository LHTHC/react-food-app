import React from 'react';

import HeaderCartBtn from './HeaderCartBtn';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React food</h1>
        <HeaderCartBtn className={classes.button}>Cart</HeaderCartBtn>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </>
  );
};

export default Header;
