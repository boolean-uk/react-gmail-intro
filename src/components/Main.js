import '../styles/app.css'

import EmailToolBar from './email_toolbar_components/EmailToolBar'
import EmailContent from './email_content_components/EmailContent'
import EmailCompose from './email_compose_components/EmailCompose'

function Main() {
  return (
    <main className="email-view">
      <EmailToolBar />
      <EmailContent />
      <EmailCompose />
    </main>
  )
}

export default Main