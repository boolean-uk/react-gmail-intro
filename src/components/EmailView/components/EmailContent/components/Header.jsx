import EmailActionsIcons from './components/EmailActionsIcons.jsx'
import './../../../../../styles/EmailContentHeader.css'

function EmailContentHeader() {
    return(
        <>        
            <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
            <div className="sender-info">
                <h2>Freepik Company</h2>
                <em>&lt;no-reply@freepik.com&gt;</em>
            </div>
            <div className="user-info">
                <p>
                to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                </p>
            </div>
            </div>
            <div className="date-info">
            <p>17 March 2021, 09:33</p>
            </div>
            <EmailActionsIcons></EmailActionsIcons>
            </header>
        </>
    )
}


export default EmailContentHeader

