import EmailContent from '../EmailContent'
import EmailToolbar from '../EmailToolbar'

function EmailView () {
    return <main className="email-view">
    <EmailToolbar />
    <EmailContent />
  </main>
}

export default EmailView