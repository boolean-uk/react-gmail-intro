import Menu from "./Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";

function PageHeader() {
    return (
        <header className="header">
            <Menu />
            <SearchBar />
        </header>
    );
}

export default PageHeader