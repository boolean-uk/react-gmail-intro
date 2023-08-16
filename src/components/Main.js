import '../styles/app.css'

import EmailToolBar from './email_toolbar_components/EmailToolBar'
import EmailContent from './email_content_components/EmailContent'

function Main() {
  return (
    <main className="email-view">
      <EmailToolBar />
      <EmailContent />
    </main>
  )
}

export default Main