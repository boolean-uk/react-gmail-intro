import EmailToolBar from './components/EmailToolBar'
import EmailContent from './components/EmailContent/EmailContent'

function EmailView() {
    return(
        <>
            <main className="email-view">
                <EmailToolBar></EmailToolBar>
                <EmailContent></EmailContent>
            </main>
        </>
    )
}

export default EmailView