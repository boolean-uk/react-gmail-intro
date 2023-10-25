import backArrow from '../../assets/icons/back-arrow.png'
import profilePhoto from '../../assets/icons/profile-photo.png'
import expandIcon from '../../assets/svgs/expand.svg'
import fontIcon from '../../assets/svgs/font.svg'
import attachIcon from '../../assets/svgs/attach.svg'
import linkIcon from '../../assets/svgs/link.svg'
import emojiIcon from '../../assets/svgs/emoji.svg'
import googleDrive from '../../assets/svgs/google-drive.svg'
import imageIcon from '../../assets/svgs/image.svg'
import lockImage from '../../assets/svgs/lock.svg'
import penImage from '../../assets/svgs/pen.svg'
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'
import menuDotsImage from '../../assets/svgs/menu-dots.svg'


import '../css-components/ReplyToEmail.css'

function ReplyToEmail() {

    return (
        <div className="reply-email-container">
            <div className='profile-photo'>
                <img src={profilePhoto} alt="phofile icon" width={40}/>
            </div>
            <div className='reply-email-content'>
                <div className='recipient-info'>
                    <img className='reply-arrow' src={backArrow} alt="reply button" width={15}/>
                    <p>&#9662;</p>
                    <p>Freepik Company (no-reply@freepik.com)</p>
                    <img className='expand-icon' src={expandIcon} alt="expand icon" width={15}/>
                </div>
                <div className='email-reply'>
                    <p>Dear Sirs, <br /> Thank you for your email...
                    </p>
                    <img className='expand-email-menu' src={menuDotsImage} alt="menu dots" width={30}/>
                </div>
                <div className='send-options'>
                    <button className='send-button'>Send</button>
                    <img src={fontIcon} alt="font icon" width={20}/>
                    <img src={attachIcon} alt="font icon" width={20}/>
                    <img src={linkIcon} alt="font icon" width={20}/>
                    <img src={emojiIcon} alt="font icon" width={20}/>
                    <img src={googleDrive} alt="font icon" width={20}/>
                    <img src={imageIcon} alt="font icon" width={20}/>
                    <img src={lockImage} alt="font icon" width={20}/>
                    <img src={penImage} alt="font icon" width={20}/>
                    <div className='extra-options'>
                        <p>&#8285;</p>
                        <img src={rubbishButton} alt="bin" width={15}/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ReplyToEmail