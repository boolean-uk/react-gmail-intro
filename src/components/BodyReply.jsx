import '../styles/BodyReply.css'

function BodyReply() {
    return (
        <div className='reply'>
            <div className='input-container'>
                <input className='reply-email' type="reply-email" placeholder="  no-replay@freepik.com" />
                <textarea className='reply-text' type="reply-text" />
            </div>
            <div className='tooltip'>
            <div className="send-container">
                    <button className="reply-send">Send</button>
                </div>
                <div className="buttons-container">
                    <button className="reply-button">Format text</button>
                    <button className="reply-button">Attachment</button>
                    <button className="reply-button">Link</button>
                    <button className="reply-button">Emoji</button>
                    <button className="reply-button">Drive</button>
                    <button className="reply-button">Image</button>
                </div>
            </div>
        </div>
    )
}

export default BodyReply;