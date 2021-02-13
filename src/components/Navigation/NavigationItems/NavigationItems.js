import React from 'react';
import classes from './NavigationItems.css';
import NavItem from './NavigationItem/NavigationItem'

const navItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" active>
            BurgerBuilder
        </NavItem>
        <NavItem link="/" >
            Checkout
        </NavItem>

    </ul>
);

export default navItems;