import React from 'react';

function EmailReplyBox() {
    return (
    <>
        <div className= "reply-box-container">
            <div className="reply-box-header">Reply to Email</div>.
            <input className="inptest" type="text" placeholder="Subject"/>
            <textarea className='textTest' placeholder="Your message..."/>
            <button className='btnTest'>Send</button>
        </div>
    </>
    )
}

export default EmailReplyBox;
