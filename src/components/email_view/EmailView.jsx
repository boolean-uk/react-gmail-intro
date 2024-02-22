import EmailViewContent from './content/EmailViewContent'
import EmailViewToolbar from './EmailViewToolbar'
import './EmailView.css'

function EmailView() {
    return (
        <main className="email-view">
            <EmailViewToolbar />
            <EmailViewContent />
        </main>
    )
}

export default EmailView