
import EmailActionBar from './EmailActionBar'
import EmailBody from './EmailBody'
import EmailHeader from './EmailHeader'
import EmailToolbar from './EmailToolbar'
import WriteEmail from './WriteEmail'
import '../styles/EmailView.css'

export default function EmailView() {
    return (
        <main className="email-view">
            <EmailToolbar />
            <article className="email-content">
                <div className="title">
                    <h1>Welcome to Flaticon</h1>
                </div>
                <EmailHeader />
                <EmailBody />
                <EmailActionBar />
                <WriteEmail />
            </article>
        </main>
    )
}