import GmailMenu from "./Header/Gmailmenu";
import Search from ".Header/Search"

function EmailHeader() {
    return (
        <header>
            <GmailMenu/>
            <Search/>
        </header>
    )
}

export default EmailHeader