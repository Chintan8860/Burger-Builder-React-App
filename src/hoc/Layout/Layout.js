import React , { Component } from 'react';
import Aux from '../Auxilary';
import classes  from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
// console.log(classes.Contents)


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
    <Aux>
        <div>
            <Toolbar drawerToggelClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}
                
            />
        </div>
        <main className={classes.Contents} >
            {this.props.children}
        </main>
    </Aux>
        );
    }
}

export default Layout;