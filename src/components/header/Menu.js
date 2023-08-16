import HamburgerMenu from "./HamburgerMenu"
import HeaderSearchBar from "./HeaderSearchBar"
import '../../styles/menu.css'
function Menu () {
    return (<header className="header">
    <HamburgerMenu/>
    <HeaderSearchBar/>
    
  </header>)
}

export default Menu