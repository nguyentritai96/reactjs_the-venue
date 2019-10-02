import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

class SideDrawer extends Component {
    render() {
        const scrollToElement = (element) => {
            scroller.scrollTo(element,{
                duaration : 1500,
                delay: 100,
                smooth: true,
                offset : -150
            })
            this.props.onClose(false)
        }

        return (
            <Drawer
                anchor="right"
                open={this.props.open}
                onClose={() => this.props.onClose(false)}
            >
                <List component="nav">
                    <ListItem button onClick={() => scrollToElement('EventStartIn')}>
                        Event starts in
                    </ListItem>

                    <ListItem button onClick={() => scrollToElement('VenueNFO')}>
                        Venue NFO
                    </ListItem>

                    <ListItem button onClick={() => scrollToElement('HighLight')}>
                        Highlight
                    </ListItem>

                    <ListItem button onClick={() => scrollToElement('Pricing')}>
                        Pricing
                    </ListItem>

                    <ListItem button onClick={() => scrollToElement('Location')}>
                        Location
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default SideDrawer;