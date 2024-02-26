import LeftMenuComponent from "./header/Left-Menu"
import SearchbarComponent from "./header/Searchbar"

function HeaderComponent() {
    return (
        <header className="header">
            <LeftMenuComponent />
            <SearchbarComponent />
        </header>
    )
}

export default HeaderComponent