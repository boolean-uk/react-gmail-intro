import './styles/app.css'

import Header from './Header'
import NavAside from './Nav-aside'
import EmailToolbar from './Email-Toolbar'
import EmailHeader from './Email-Header'
import EmailBody from './Email-Body'
import EmailActions from './Email-Actions'
import EmailTitle from './Email-Title'

function App() {
  return (
    <div className="app">
      <Header />
      <NavAside />
      
      <main className="email-view">
        <EmailToolbar />
        <article className="email-content">
          <EmailTitle />
          <EmailHeader />
          <EmailBody />
          <EmailActions />
        </article>
      </main>
    </div>
  )
}

export default App
