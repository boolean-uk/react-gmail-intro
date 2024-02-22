import React from 'react'
import './../styles/App.css'
import EmailToolbarComponent from './MainSubcomponents/EmailToolbarComponent'
import EmailContentComponent from './MainSubcomponents/EmailContentComponent'
import EmailReplyComponent from './MainSubcomponents/EmailReplyComponent'


function MainComponent() {
  return (
    <div><main className="email-view">
    <EmailToolbarComponent />
    <EmailContentComponent />
    <EmailReplyComponent />
  </main></div>
  )
}

export default MainComponent