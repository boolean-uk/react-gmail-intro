import EmailContent from './EmailContent'
import EmailToolbar from './EmailToolbar'

function MainContent() {
    return (
        <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    )
}

export default MainContent