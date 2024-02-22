import React from 'react'
import './../styles/App.css'
import EmailToolbarComponent from './MainSubcomponents/EmailToolbarComponent'
import EmailContentComponent from './MainSubcomponents/EmailContentComponent'



function MainComponent() {
  return (
    <div><main className="email-view">
    <EmailToolbarComponent />
    <EmailContentComponent />
  </main></div>
  )
}

export default MainComponent