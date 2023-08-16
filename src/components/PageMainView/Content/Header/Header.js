import './header.css'

import Avatar from './Avatar/Avatar';
import MailInfo from './MailInfo/MailInfo';
import DateInfo from './DateInfo/DateInfo';
import MailActions from './MailActions/MailActions';

function Header() {
    return (
        <header className="email-content--header">
            <Avatar />
            <MailInfo />
            <DateInfo />
            <MailActions />
        </header>
    );
}

export default Header