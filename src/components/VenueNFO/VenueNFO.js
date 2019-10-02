import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

class VenueNFO extends Component {
    render() {
        return (
            <div>
                <div className="bck_black">
                    <div className="center_wrapper">
                        <div className="vn_wrapper">

                            <Zoom duration={500}>
                                <div className="vn_item">
                                    <div className="vn_outer">
                                        <div className="vn_inner">
                                            <div className="vn_icon_square bck_red"></div>
                                            <div
                                                className="vn_icon"
                                                style={{
                                                    background: `url(${icon_calendar})`
                                                }}
                                            ></div>
                                            <div className="vn_title">
                                                Thời gian
                                    </div>
                                            <div className="vn_desc">
                                                Chủ nhật, 17/11/2019
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>

                            <Zoom duration={500} delay={500}>
                                <div className="vn_item">
                                    <div className="vn_outer">
                                        <div className="vn_inner">
                                            <div className="vn_icon_square bck_yellow"></div>
                                            <div
                                                className="vn_icon"
                                                style={{
                                                    background: `url(${icon_location})`
                                                }}
                                            ></div>
                                            <div className="vn_title">
                                                Địa điểm
                                    </div>
                                            <div className="vn_desc">
                                            Khu đô thị sinh thái Ecopark
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VenueNFO;