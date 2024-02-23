import './styles.css'

import LeftMenu from "./components/LeftMenu"
import Search from "./components/Search"

function Header() {
    return (
        <header className="header">
            <LeftMenu/>
            <Search/>
      </header>
    )
}

export default Header