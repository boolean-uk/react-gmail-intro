import './Text.css'
import backArrow from '../assets/icons/back-arrow.png';
import sendButton from '../assets/icons/send-button.png';
export default function Text() {
    return (

        <div className="large-textbox-container">
            <div className="reply-button">
                <img className="icon" src={backArrow} alt="reply button" />
            </div>
            <textarea className="large-textbox" placeholder="        Type here..."></textarea>
            <div className="send-button">
                <img className="icon" src={sendButton} alt="send button" height={100} width={100}/>
            </div>

        </div>
    )
}