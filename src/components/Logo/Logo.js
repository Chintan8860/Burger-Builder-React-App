import React from 'react';
import Blogo from '../../assets/images/burger.png';
import classes from './Logo.css'

const logo = (props) => (
   <div className={classes.Logo} style={{height : props.height}}>
       <img src={Blogo} alt="Burger Builder" />
   </div>
);

export default logo;