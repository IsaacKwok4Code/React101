import React, { Component } from 'react';
import Auxiliary from '../auxiliary/Auxiliary';
import './Layout.css';
class Layout extends Component {
    render(){
        return(
            <Auxiliary>
                <div>
                    Toolbar, SideDrawer, Backdrop
                </div>
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;