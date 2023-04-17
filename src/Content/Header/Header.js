import './Header.css'
import HeaderLeftMenu from "./HeaderLeftMenu/HeaderLeftMenu"
import HeaderSearch from "./HeaderSearch/HeaderSearch"

function Header (){
    return (
        <header className="header">
        <HeaderLeftMenu />
        <HeaderSearch />
      </header>
    )
}

export default Header