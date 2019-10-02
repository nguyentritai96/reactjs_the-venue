import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

class MyButton extends Component {
    render() {
        return (
            <Button
                href={this.props.link}
                variant="contained"
                size="small"
                style={{
                    background: this.props.bck,
                    color: this.props.color
                }}
            >
                <img
                    src={TicketIcon}
                    className="iconImage"
                    alt="icon_button"
                />
                {this.props.text}
            </Button>
        );
    }
}

export default MyButton;