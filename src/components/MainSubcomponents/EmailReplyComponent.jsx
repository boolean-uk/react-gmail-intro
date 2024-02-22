import React from 'react'

import './../../styles/email-reply.css' 

import backArrow from './../../assets/icons/back-arrow.png'
import rubbishButton from './../../assets/icons/rubbish-bin-delete-button.png'

function EmailReplyComponent() {
  return (
    <header className="write-email">
      <div className="avatar"></div>
      <div className="msg-box">
        <nav className="msg-toolbar">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <p>Freepik Company &lt;no-reply@freepik.com&gt;</p>
            </li>
          </ul>
        </nav>
        <div className="message-info">
          <div className="user-info">
            <span></span>
          </div>
          <section className="send-button">
            <button>Send</button>
          </section>
        </div>
      </div>
    </header>
  )
}

export default EmailReplyComponent