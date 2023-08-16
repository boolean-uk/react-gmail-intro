import rubbishButton from "../../assets/icons/rubbish-bin-delete-button.png";

function NavbarDeleteButton() {
    return (
        <li>
            <img className="icon" src={rubbishButton} alt="delete button" />
        </li>
    );
}

export default NavbarDeleteButton;
