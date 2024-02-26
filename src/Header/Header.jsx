import HeaderLeftMenu from './HeaderLeftMenu.jsx'
import HeaderSearchbar from './HeaderSearchbar.jsx'

function Header() {
    return (
        <header className="header">
            <HeaderLeftMenu/>
            <HeaderSearchbar/>
        </header>
    )
}

export default Header