import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItem from '../NavigationItems/NavigationItems'
import DrawerToggel from '../SideDrawer/DrawerToggel/DrawerToggel'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggel clicked={props.drawerToggelClicked}/>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
        <NavItem/></nav>
    </header>
);

export default toolbar;