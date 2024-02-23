import React from 'react'
import Sender from './EmailHeaderComponents/Sender'
import User from './EmailHeaderComponents/User'
import Date from './EmailHeaderComponents/Date'
import EmailActionIcons from './EmailActionIcons'

function EmailHeader() {
  return (
    <>
        <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <Sender/>
              <User/>
            </div>
            <Date/>
            <div className="email-action-icons">
              <EmailActionIcons/>
            </div>
        </header>
    </>
  )
}

export default EmailHeader