import './styles/app.css'

import Header from './header'
import LeftMenu from './leftMenu'
import EmailToolbar from './emailToolbar'
import EmailHeader from './emailContentHeader'
import EmailBody from './emailBody'
import EmailActions from './emailActions'
import Title from './title'
import EmailReply from './emailReply'

function App() {
  return (
    <div className="app">
      <Header />

      <LeftMenu />

      <main className="email-view">

        <EmailToolbar />

        <article className="email-content">
          <Title />
          <EmailHeader />
          <EmailBody />
          <EmailActions/>
          <EmailReply />
        </article>
      </main>
    </div>
  )
}

export default App
