import HeaderLeftMenu from './HeaderLeftMenu'
import HeaderSearch from './HeaderSearch'

import '../css-components/Header.css'

function Header() {
    return (
        <header className="header">
            <HeaderLeftMenu></HeaderLeftMenu>
            <HeaderSearch></HeaderSearch>
        </header>
    )
}

export default Header