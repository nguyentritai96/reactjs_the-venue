import React, { Component } from 'react';
import Slider from 'react-slick'; 

import slide_one from './../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

let images = [{
        id : 1,
        url : slide_one
    },
    {
        id : 2,
        url : slide_two
    },
    {
        id : 3,
        url : slide_three
    }]

class Carrousel extends Component {
    state = {
        height : window.innerHeight
    }

    setHeight = () => {
        this.setState({
            height : window.innerHeight
        })
    }
    componentDidMount () {
        window.addEventListener('resize', this.setHeight)
    }
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 500
        }
        
        let slides = images.map((image, index) => {
            return(
                <div key={index}>
                <div className="carrousel_image"
                        style={{
                                background: `url(${image.url})`,
                                height: `${this.state.height}px`,
                        }}
                        >
                </div>
                </div>
            )
        })
        
        return (
            <div
                className="carrousel_wrapper"
                style={{
                    height: `${this.state.height}px`,
                    overflow: 'hidden'
                }}
            >
                <Slider {...settings}>
                    {slides}
                </Slider>

            </div>
        );
    }
}

export default Carrousel;