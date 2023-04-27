import './styles/app.css'

import React from 'react'
import Header from './header.js'
import Menu from './menu.js'
import EmailToolbar from './email-toolbar.js'
import EmailContent from './email-content.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    </div>
  )
}

export default App
