import EmailToolBar from './components/Emailbar'
import EmailContent from './components/EmailContent/EmailContent'

function emailui() {
    return(
        <>
            <main className="email-view">
                <EmailToolBar></EmailToolBar>
                <EmailContent></EmailContent>
            </main>
        </>
    )
}

export default emailui