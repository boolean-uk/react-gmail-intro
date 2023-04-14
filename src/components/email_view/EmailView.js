import React from 'react'
import '../../styles/EmailView.css'
import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'
import backArrow from '../../assets/icons/back-arrow.png'

import rateStarButton from '../../assets/icons/rate-star-button.png'
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'
import EmailToolbar from './EmailToolbar'
import EmailContent from './EmailContent'

const EmailView = () => {

  return (
    <main className="email-view">
      <EmailToolbar/>
      <EmailContent />
    </main>
  )



}

export default EmailView
