import EmailToolbar from './EmailToolbar'
import EmailContent from './EmailContent'
import EmailCompose from './EmailCompose';


function EmailView() {
    return(
        <main className="email-view">
        <EmailToolbar />
        <EmailContent />
        <EmailCompose />
      </main>
    )
}

export default EmailView;