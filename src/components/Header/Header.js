import LeftMenuIcon from "./left-menu-icon"
import Search from "./search"
import '../../styles/header.css'

function MainHeader() {
    return <header className="header">
        <LeftMenuIcon/>
        <Search/>
    </header>
}
export default MainHeader