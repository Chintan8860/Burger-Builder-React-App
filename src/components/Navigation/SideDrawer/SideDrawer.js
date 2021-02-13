import React from 'react';
import Logo from '../../Logo/Logo';
import NavItem from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop'



const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
        <BackDrop show={props.open} clicked={props.closed}></BackDrop>
        <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
         <Logo/>
        </div>            
            <nav>
                <NavItem/>
            </nav>
        </div>
        </>
    );
}
    

export default sideDrawer;