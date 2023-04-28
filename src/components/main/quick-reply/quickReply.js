import userImage from 'assets/icons/user.png'
import backArrow from 'assets/icons/back-arrow.png'
import dropDownIcon from 'assets/icons/drop-down-arrow.png'
import dotsImage from 'assets/icons/dots.png'
import flatButtons from 'assets/images/flaticon-buttons-image.jpg'

import './quickReply.css'

function QuickReply() {
    return (
        <section class='quick-reply-wrapper'>
            <div class='avatar'>
                <img src={userImage} alt="avatar thumbnail image" />
            </div>
            <div class='quick-reply'>
                <div class='header'>
                    <img src={backArrow} alt="Go back arrow" />
                    <img src={dropDownIcon} alt="arrow for more info" />
                    <p class='sender-info'>Freepik Company (no-reply@freepik.com)</p>
                </div>
                <div class='reply-message'>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <img class="dots" src={dotsImage} alt="Show the complete conversation" />
                    <div class='buttons'>
                        <img src={flatButtons} alt="Send reply and edit message actions" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default QuickReply