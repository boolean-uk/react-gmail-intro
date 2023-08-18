import LeftMenu from './LeftMenuIcons/LeftMenu'
import SearchBar from './SearchIcons/SearchBar'
import SearchFunction from './SearchIcons/SearchFunction'
import './header.css'

function Header() {
    return (<header className='header'>
        <SearchBar />
        <SearchFunction />      
    </header>)
}

export default Header