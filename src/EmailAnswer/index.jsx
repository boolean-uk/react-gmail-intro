import sendbtn from '../assets/images/sendbtn.png'
import profile from '../assets/images/profile.png'
import pen from '../assets/images/pen.png'
import paperclip from '../assets/images/paperclip.png'
import lockwatch from '../assets/images/lockwatch.png'
import linkimg from '../assets/images/linkimg.png'
import img from '../assets/images/img.png'
import fullscreen from '../assets/images/fullscreen.png'
import face from '../assets/images/Face.png'
import drive from '../assets/images/Drive.png'
import dots from '../assets/images/dots.png'
import arrowBack from '../assets/images/arrowBack.png'
import underline from '../assets/images/A-underline.png'
import dotsandcan from '../assets/images/3dotsandtrashcan.png'

import './styles.css'

function EmailAnswear() {
    return (
        <>       <div className="profile">
        <img src={profile} alt="" />
      </div>
          <div className="email-composer-container">
     
        <div>
            <div className="container">
                <div className="arrow-back">
                <img src={arrowBack} alt="" />
                </div>
                <div className="fullscreen">
                <img src={fullscreen} alt="" />
                </div>
            </div>
                <textarea
                className="compose-textarea"
                placeholder="Compose your email..."
                />
                <div className="dots">
                    <img src={dots} alt="" />
                </div>
                <div className="container">
                    <div className="action-buttons">
                        <img src={sendbtn} alt="sendbtn" />
                        <img src={underline} alt="" />
                        <img src={paperclip} alt="" />
                        <img src={linkimg} alt="" />
                        <img src={face} alt="" />
                        <img src={drive} alt="" />
                        <img src={img} alt="" />
                        <img src={lockwatch} alt="" />
                        <img src={pen} alt="" />
                    </div>

                    <div className="dots-and-can">
                        <img src={dotsandcan} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
      );
}

export default EmailAnswear