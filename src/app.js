import './styles/app.css'

import Header from './Header.js'
import LeftMenuBar from './left-menu.js'
import EmailToolBar from './email-toolbar.js'
import DivTitle from './divTitle.js'
import EmailContentHeader from './EmailContentHeader.js'
import EmailBodySection from './EmailBodySection.js'
import EmailActions from './EmailActions.js'


function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenuBar />
      <main className="email-view">
        <EmailToolBar />
        <article className="email-content">
          <DivTitle />
          <EmailContentHeader />
          <EmailBodySection />
         <EmailActions />
        </article>
      </main>
    </div>
  )
}

export default App
