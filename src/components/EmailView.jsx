import React from 'react'
import EmailComponent from './EmailComponent'
import EmailToolbar from './EmailToolbar'

function EmailView() {
  return (
    <main className="email-view">
        <EmailToolbar />
        <EmailComponent />
      </main>
  )
}

export default EmailView