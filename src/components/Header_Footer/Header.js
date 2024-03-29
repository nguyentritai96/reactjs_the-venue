import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {
    constructor (props) {
        super (props);
        this.state = {
            drawerOpen : false,
            showHeader : false
        }
    }
    
    componentDidMount () {
        window.addEventListener('scroll', this.scrollShowHeader);
    }

    scrollShowHeader = () => {
        if (window.scrollY > 0) {
            this.setState({
                showHeader : true
            })
        }else {
            this.setState({
                showHeader : false
            })
        }
    }
    toggleDrawer = (value) => {
        console.log(value)
        this.setState({
            drawerOpen : value
        })
    }

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.showHeader ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Event</div>
                    </div>

                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={this.toggleDrawer}
                    />

                    
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;