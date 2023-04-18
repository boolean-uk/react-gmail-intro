import './styles/EmailContentHeader.css'

import EmailActionIcons from './EmailActionIcons.js'
import DateInfo from './DateInfo.js'
import Avatar from './Avatar.js'
import EmailInfo from './EmailInfo.js'

function EmailContentHeader () {
    return (          
    <header className="email-content--header">
    <Avatar />
    <EmailInfo />
    <DateInfo />
    <EmailActionIcons />
  </header>)
}

export default EmailContentHeader