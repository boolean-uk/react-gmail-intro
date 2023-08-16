import InboxList from "./InboxList";
import "../../styles/leftMenu.css";

function NavElement() {
    return (
        <nav className="left-menu">
            <InboxList />
        </nav>
    );
}

export default NavElement;
