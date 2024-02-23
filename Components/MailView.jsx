import React from 'react'
import MailContent from './MailContent'
import ToolBar from './ToolBar'

function MailView() {
  return (
    <main className="email-view">
        <ToolBar />
        <MailContent />
      </main>
  )
}

export default MailView