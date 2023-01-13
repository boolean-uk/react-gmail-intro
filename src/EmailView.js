// import './styles/emailView.css'

import NewEmail from './NewEmail'

import EmailToolbar from './EmailToolbar'
import EmailContent from './EmailContent'


function EmailView() {
    return (
        <main className="email-view">
            <EmailToolbar/>
            <EmailContent/>
            <NewEmail/>
        </main>
    )
};

export default EmailView;