import './styles/app.css'

import EmailView from './EmailView.js'
import EmailToolbar from './EmailToolbar.js'
import Header from './Header.js'
import Leftmenu from './Leftmenu.js'
import Title from './Title.js'
import EmailContentHeader from './EmailContentHeader.js'
import EmailActions from './EmailActions.js'
import EmailBody from './EmailBody'
function App() {
  return (
    <div className="app">
      <Header />
      <Leftmenu />
      <main className="email-view">
      <EmailToolbar />
        <article className="email-content">
          <Title />
          <EmailContentHeader />
          <EmailBody />
          <EmailActions />
        </article>
      </main>
    </div>
  )
}

export default App
