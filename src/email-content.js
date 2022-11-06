import './styles/email-content.css'

import EmailContentHeader from './email-content--header.js'
import EmailBody from './email-body.js'
import EmailActions from './email-actions.js'

function EmailContent() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>

      <EmailContentHeader />

      <EmailBody />

      <EmailActions />
    </article>
  )
}

export default EmailContent