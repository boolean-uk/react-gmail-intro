import EmailBody from 'components/EmailBody/EmailBody'
import EmailHeader from 'components/EmailHeader/EmailHeader'
import EmailActions from 'components/EmailActions/EmailActions'

import './EmailContent.css'

const EmailContent = () => {
  return(
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <EmailHeader />
      <EmailBody />
      <EmailActions />
    </article>
  )
}

export default EmailContent
