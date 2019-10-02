import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div className="location_wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.490715800473!2d106.6564059!3d10.801915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc244f612083ece50!2sTheater%20Army!5e0!3m2!1sen!2s!4v1569838571265!5m2!1sen!2s" 
                width="100%"
                title = "location"
                height="500" 
                frameBorder="0" 
                allowFullScreen="">

                </iframe>

                <div className="location_tag">
                    <div>Location</div>
                </div>
            </div>
        );
    }
}

export default Location;