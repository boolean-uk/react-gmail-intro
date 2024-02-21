import SearchBar from "./SearchBar/SearchBar"
import LeftMenu from "./LeftMenu/LeftMenu"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <LeftMenu></LeftMenu>
            <SearchBar></SearchBar>
      </header>
    )
}

export default Header