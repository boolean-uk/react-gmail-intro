import '../styles/Header.css'
import LeftMenu from './HeaderLeftMenu'
import Search from './HeaderSearchBar'

function Header() {
    return (
        <header className="header">
            <LeftMenu />
            <Search />
      </header>
    )
}

export default Header;