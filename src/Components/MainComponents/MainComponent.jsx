import React from 'react'
import Toolbar from './Toolbar'
import EmailContent from './EmailContent'


function MainComponent() {
  return (
    <>
    <main className="email-view">
      <Toolbar/>
      <EmailContent/>
    </main>
    </>
  )
}

export default MainComponent