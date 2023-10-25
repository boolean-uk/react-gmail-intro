import backArrow from '../../assets/icons/back-arrow.png'
import profilephoto from '../../assets/icons/profile-photo.png'

import '../css-components/ReplyToEmail.css'

function ReplyToEmail() {

    return (
        <div className="reply-email-container">
            <div className='profile-photo'>
                <img src={profilephoto} alt="phofile icon" width={40}/>
            </div>
            <div className='reply-email-content'>
                <div className='recipient-info'>
                    <img className='reply-arrow' src={backArrow} alt="reply button" width={15}/>
                    <p>Freepik Company (no-reply@freepik.com)</p>
                </div>
                <div className='email-reply'>
                    <p>Dear Sirs, <br /> Thank you for your email...
                    </p>
                </div>
                <div className='send-options'>
                    <button className='send-button'>Send</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ReplyToEmail