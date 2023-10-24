import '../styles/write-email.css'

import backArrow from '../assets/icons/back-arrow.png'
import person from '../assets/icons/person.png'
import threedots from '../assets/icons/threedots.png'
import expand from '../assets/icons/expand.png'

import sendbutton from '../assets/icons/sendbutton.png'
import textsize from '../assets/icons/textsize.png'
import attachment from '../assets/icons/attachment.png'
import weblink from '../assets/icons/weblink.png'
import emoticon from '../assets/icons/emoticon.png'
import drive from '../assets/icons/drive.png'
import photo from '../assets/icons/photo.png'
import confidential from '../assets/icons/confidential.png'
import signature from '../assets/icons/signature.png'

import menu from '../assets/icons/menu.png'
import can from '../assets/icons/can.png'

function WriteEmail() {
    return  <div className='respond'>
        <img className='respond-avatar' src={person} alt='avatar' />
    <div className='write-email'>
        <div className='write-emailbar'>
            <img className="respond-icon" src={backArrow} alt="reply button" />
                <p className="respond-mail">Freepik Company (no-reply@freepic.com)</p>
            <img className='respond-expand' src={expand} alt='expand' />
        </div>

        <div className='respond-body'>
        </div>

        <div className='threedots'>
            <img className='respond-dots' src={threedots} alt='three dots' />
        </div>

        <div className='bottom-buttons'> 
            <div className='buttonrow'>

                <img className='send-button' src={sendbutton} alt='send email'/>
                <img className='textsize' src={textsize} alt='text size'/>
                <img className='attachment' src={attachment} alt='add attachment' />
                <img className='weblink' src={weblink} alt='make weblink'/>
                <img className='emoticon' src={emoticon} alt='add emoticon' />
                <img className='drive' src={drive} alt='connect to drive' />
                <img className='photo' src={photo} alt='add photo' />
                <img className='confidential' src={confidential} alt='confidential'/>
                <img className='signature' src={signature} alt='add signature'/>

                <img className='menu' src={menu} alt='menu'/>
                <img className='trashcan' src={can} alt='throw away concept'/>
            </div>
        </div>

    </div>
</div>
}

export default WriteEmail