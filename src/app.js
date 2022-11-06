import './styles/app.css'

import Nav from './nav.js'
import Header from './header.js'
import NavToolbar from './nav-toolbar.js'

import EmailContent  from './email-content'

function App() {
  return (
    <div className="app">
      <Header />

      <Nav />

      <main className="email-view">
        <NavToolbar />

        <EmailContent />
      </main>
    </div>
  )
}

export default App
