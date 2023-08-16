import LeftMenuHeader from "./LeftMenuHeader";
import SearchBar from "./SearchBar";
import "../../styles/header.css";

function Header() {
    return (
        <header className="header">
            <LeftMenuHeader />
            <SearchBar />
        </header>
    );
}

export default Header;
