import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes  from './Layout.css';

// console.log(classes.Contents)

const layout = (props) => (
    <Aux>
    <div>
        Toolbar,Sidebar,BAckdrop
    </div>
    <main className={classes.Contents} >
        {props.children}
    </main>
    </Aux>
);

export default layout;