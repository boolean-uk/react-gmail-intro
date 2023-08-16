import '../../styles/app.css'

import EmailTitle from './EmailTitle'
import EmailHeader from './EmailHeader'
import EmailBody from './EmailBody'
import EmailActions from './EmailActions'

function EmailContent() {
  return (
    <article className="email-content">
      <EmailTitle />
      <EmailHeader />
      <EmailBody />
      <EmailActions />
    </article>
  )
}

export default EmailContent