import NavbarDivElement from "./NavbarDivElement";
import UlNavbarElement from "./UlNavbarElement";

function NavBarElement() {
    return (
        <nav className="email-toolbar">
            <UlNavbarElement />
            <div className="space"></div>
            <NavbarDivElement />
        </nav>
    );
}

export default NavBarElement;
