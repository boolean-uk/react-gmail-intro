import SearchFunction from './SearchFunction'
import GmailLogo from "./GmailLogo"
import HeaderIcons from './HeaderIcons'

function Header() {
    return (<header className='header'>
        <SearchFunction /> 
        <HeaderIcons />
         <GmailLogo />
    </header>)
}

export default Header