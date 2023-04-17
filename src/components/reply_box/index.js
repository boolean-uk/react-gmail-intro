import './reply.css'

import downArrow from 'assets/icons/down-arrow.png'
import leftArrow from 'assets/icons/back-arrow.png'
import A from 'assets/icons/A.png'
import attach from 'assets/icons/attach.png'
import emoji from 'assets/icons/emoji.png'
import image from 'assets/icons/image.png'
import pen from 'assets/icons/pen.png'
import dots from 'assets/icons/dots.png'
import trash from 'assets/icons/rubbish-bin-delete-button.png'

function ReplyBox() {
    return (
        <div className="reply">
             <div className="reply-box">
                <header>
                    <button id="left-arrow"><img src={leftArrow}/></button>
                    <button  id="down-arrow"><img src={downArrow}/></button>
                    <div id="email">Freepik Company (no-reply@freepik.com)</div>
                </header>

                <textarea ></textarea>

                <footer>
                    <div id="left-icons">
                        <div id="pair-buttons">
                            <button id="left-btn">Send</button>
                            <button id="right-btn"><img src={downArrow}/></button>
                        </div>
                        <img src={A} />
                        <img src={attach} />
                        <img src={emoji} />
                        <img src={image} />
                        <img src={pen} />
                    </div>

                    <div id="right-icons">
                        <img src={dots} />
                        <img src={trash} />
                    </div>
                </footer>
            </div>
        </div> 
    )
}

export default ReplyBox