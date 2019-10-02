import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from './../utils/MyButton';

class Discount extends Component {
    constructor (props) {
        super (props);
        this.state = {
            discountStart:0,
            discountEnd:30
        }
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>Giảm giá</span>
                            <span>{this.state.discountStart}%</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Mua vé trước ngày 15 tháng 11</h3>
                            <p>Hãy cùng chúng tôi chung tay thắp lửa để thay đổi những bất bình đẳng và 
                            đảm bảo mọi trẻ em đều được hưởng những chăm sóc toàn diện, 
                            những chăm sóc sẽ mang lại đổi thay mãi mãi cho cuộc đời các em.</p>
                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link=""
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;