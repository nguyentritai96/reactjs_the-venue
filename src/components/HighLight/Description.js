import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Description extends Component {
    render() {
        return (
            <Fade>
                <div className="center_wrapper">
                    <h2>Giới thiệu</h2>
                    <div className="highlight_description">
                    Color Run For Smiles nằm trong chuỗi sự kiện kỉ niệm 30 năm Operation Smile Việt Nam. 
                    Trong suốt 30 năm qua, với những nỗ lực không ngừng nghỉ của các tình nguyện viên y tế, 
                    các nhà tài trợ, những trái tim nhân ái và những người bạn luôn đồng hành cùng Operation Smile, 
                    chúng tôi đã mang lại gần 60,000 nụ cười mới, cuộc đời mới cho trẻ em Việt Nam. 
                    Color Run For Smiles sẽ được tổ chức tại Hà Nội vào ngày 17/11/2019.
                </div>
                </div>
            </Fade>
        );
    }
}

export default Description;