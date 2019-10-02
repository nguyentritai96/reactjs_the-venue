import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class TimeUntil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'Nov, 17, 2019',
            timeNow: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }
    }

    getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log('Date passed')
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({
                timeNow: {
                    days,
                    hours,
                    minutes,
                    seconds
                }
            })
        }
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
    }
    render() {
        let timeElements = Object.keys(this.state.timeNow).map((key, index) => {
            return (
            <div key={index} className="countdown_item">
                <div className="countdown_time">
                        {this.state.timeNow[key]}
                </div>
                <div className="countdown_tag">
                        {key}
                </div>
            </div>
            )
        })
        return (
            <Slide left delay={1000}>
                <div>
                    <div className="countdown_wrapper">
                        <div className="countdown_top">
                            Event starts in
                        </div>
                        <div className="countdown_bottom">
                        {timeElements}
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}
export default TimeUntil;