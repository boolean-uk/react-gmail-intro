import './style.css'

import DateInfo from './DateInfo'
import EmailInfo from './EmailInfo'
import EmailActionIcons from './EmailActionIcons';

function EmailContentHeader() {
    return (
        <header className="email-content--header">
            <div className="avatar"></div>
            <EmailInfo />
            <DateInfo />
            <EmailActionIcons />
          </header>
    )
}

export default EmailContentHeader;