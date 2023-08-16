import EmailTitle from './emailTitle/EmailTitle'
import EmailHeader from './emailHeader/EmailHeader'
import EmailBody from './emailBody/EmailBody'
import EmailActions from './emailActions/EmailActions'

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