import NavbarReplyButton from "./NavbarReplyButton";
import NavbarArchiveButton from "./NavbarArchiveButton";
import NavbarDeleteButton from "./NavbarDeleteButton";

function UlNavbarElement() {
    return (
        <ul>
            <NavbarReplyButton />
            <NavbarArchiveButton />
            <NavbarDeleteButton />
        </ul>
    );
}

export default UlNavbarElement;
