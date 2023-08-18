import '../styles/header.css'

import HeaderLeftMenu from './headerComponents1/HeaderLeftMenu'
import HeaderSearch from './headerComponents1/HeaderSearch'

function Header() {
    return (
        <header className="header">

        <HeaderLeftMenu />

        <HeaderSearch />
        
      </header>
    )
}

export default Header