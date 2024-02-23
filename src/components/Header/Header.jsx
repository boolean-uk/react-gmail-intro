import LeftMenu from "./LeftMenu/LeftMenu"
import Search from "./Search/Search"
import '../../styles/Header.css'

function Header() {
    return (
      <header className="header">
      < LeftMenu />
      < Search/>
    </header>
    )

}

export default Header