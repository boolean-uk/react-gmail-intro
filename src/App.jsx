import './styles/App.css'

import { Header } from './header'
import { LeftMenu } from './leftMenu'
import { EmailToolbar } from './emailToolbar'
import { ContentHeader } from './contentHeader'
import { EmailActions } from './emailActions'
import { EmailBody } from './emailBody'
import { Reply } from './reply'

function App() {
  return (
    <div className="app">
      <Header />

      <LeftMenu />
      
      <main className="email-view">
        <EmailToolbar />

        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          
          <ContentHeader />

          <EmailBody />

          <EmailActions />

          <Reply />

        </article>
      </main>
    </div>
  )
}

export default App
