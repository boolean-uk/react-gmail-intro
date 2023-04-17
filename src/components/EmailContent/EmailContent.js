import EmailActions from '../EmailActions/EmailActions'
import EmailBody from '../EmailBody/EmailBody'
import EmailHeader from '../EmailHeader/EmailHeader'


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
