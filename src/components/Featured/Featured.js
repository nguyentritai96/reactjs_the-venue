import React, { Component } from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

// Lưu ý phải chèn 2 css của react-slick vào index.html 
class Featured extends Component {
    render() {
        return (
            <div style={{position : 'relative'}}>
                <Carrousel/>
                <div className="artist_name">
                    <div className="wrapper">
                        COLOR ME RUN
                    </div>
                </div>
                <TimeUntil />
            </div>
        );
    }
}

export default Featured;