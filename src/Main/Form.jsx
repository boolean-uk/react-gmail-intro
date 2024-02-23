import './style.css'

function Form() {
    return (
        <form className="reply-form"> 
            <textarea className="reply-textarea" name="reply" placeholder="Type your reply here..."></textarea>
            <div className="button-container">
                <button type="submit" className="blue-btn send-btn">Send</button>
                <button type="button" className="light-grey-btn attach-btn">Attach File</button>
                <button type="button" className="light-grey-btn delete-btn">Delete Draft</button>
            </div>
        </form>
    )
}

export default Form