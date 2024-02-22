import backArrow from '../../../assets/icons/back-arrow.png'
import downArrow from '../../../assets/icons/down-arrow.png'
import rubbishButton from '../../../assets/icons/rubbish-bin-delete-button.png'


function EmailViewContentWrite() {
    return (
        <div className="email-write">
            <form>
                <div className="email-write-header">
                    <img className="icon" src={backArrow} alt="reply button" />
                    <img className="icon--small" src={downArrow} alt="reply button" />
                    <input type="email" id="email-write-to" name="" value="no-reply@freepik.com" disabled />
                </div>
                <textarea id="email-write-content" name="emailBody" rows="10"></textarea>
                <div className="email-write-footer">
                    <button type="submit">Send</button>
                    <img id="delete-btn" className="icon" src={rubbishButton} alt="reply button" />
                </div>
            </form>
      </div>
    )
}

export default EmailViewContentWrite