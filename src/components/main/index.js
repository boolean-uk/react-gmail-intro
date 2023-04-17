import EmailToolbar  from './email_toolbar/emailToolbar'
import EmailContent from './email_content/emailContent'

export default function Main() {
    return (
        <main className="email-view">
            <EmailToolbar />
            <EmailContent />
        </main>
    )
}