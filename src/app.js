import './styles/app.css'
import './styles/HeaderCSS/header.css'
import './styles/LeftbarCSS/leftbar.css'
import './styles/EmailmainCSS/emailmain.css'

import Header from './Header/header.js'
import Leftbar from './Left-Bar/leftbar.js'
import EmailToolbar from './Email-Main/email-toolbar.js'
import EmailContent from './Email-Main/email-content.js'



function App() {
  return (
    <div className="app">
      <Header />
      <Leftbar />
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    </div>
  )
}

export default App
