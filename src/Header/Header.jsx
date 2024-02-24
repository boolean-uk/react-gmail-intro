import '../styles/Header.css'

import HeaderMenu from "./HeaderMenu";
import Search from "./Search";

function Header() {
    return (
        <header className="header">
        <HeaderMenu />
        <Search />
      </header>
    )
}

export default Header;