import React from 'react'
import '../../styles/EmailView.css'

import EmailToolbar from './EmailToolbar'
import EmailContent from './EmailContent'
import EmailWrite from './EmailWrite'

const EmailView = () => {

  return (
    <main className="email-view">
      <EmailToolbar/>
      <EmailContent />
      <EmailWrite/>
    </main>
  )



}

export default EmailView
