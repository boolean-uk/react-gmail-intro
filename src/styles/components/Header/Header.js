import './header.css'
import SearchFunction from './Searchbar/SearchFunction'
import HeaderIcons from './HeaderImg/Headericons'

function Header() {
    return (<header className='header'>
        <SearchFunction />
        <HeaderIcons />
    </header>)
}

export default Header