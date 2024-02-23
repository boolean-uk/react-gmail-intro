import './styles.css'

import EmailInfo from './components/EmailInfo'
import DateInfo from './components/DateInfo'
import EmailActions from './components/EmailActions'
import Avatar from './components/Avatar'

function Header() {
    return (
        <header className="email-content--header">
        <Avatar/>
        <EmailInfo/>
        <DateInfo/>
        <EmailActions/>
      </header>
    )
}

export default Header