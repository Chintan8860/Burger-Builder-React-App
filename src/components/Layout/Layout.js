import React from 'react';
import Aux from '../../hoc/Auxilary';
import'./Layout.css';

// console.log(classes.Contents)

const layout = (props) => (
    <Aux>
    <div>
        Toolbar,Sidebar,BAckdrop
    </div>
    <main className="Contents" >
        {props.children}
    </main>
    </Aux>
);

export default layout;