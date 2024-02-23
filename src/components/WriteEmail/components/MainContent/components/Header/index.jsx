import backArrow from '@/assets/icons/back-arrow.png'
import replyOptions from '@/assets/writeemail/replyoptions.png'
import share from '@/assets/writeemail/share.png'

import './styles.css'

function Header() {
    return (
        <header className="writing-box-header">
              <img className="reply" src={backArrow} alt="reply button" />
              <img className="reply-options" src={replyOptions} alt="reply options" />
              <input className="email-recepient" type="text" placeholder="Example man (example@email.com)" />
              <img className="share" src={share} alt="share" />
            </header>
    )
}

export default Header