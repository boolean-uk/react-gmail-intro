import './email-view.css'
import EmailToolbar from './emailToolbar/EmailToolbar'
import EmailContent from './emailContent/EmailContent'

function EmailView() {
    return (
        <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    )
}
export default EmailView