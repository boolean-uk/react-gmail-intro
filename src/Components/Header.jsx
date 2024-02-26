import GmailMenu from "./Header/Gmailmenu";
import Search from ".Header/Search"

function EmailHeader() {
    return (
        <header className="header">
            <GmailMenu/>
            <Search/>
        </header>
    )
}

export default EmailHeader