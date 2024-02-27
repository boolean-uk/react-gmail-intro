import GmailMenu from "./Homeheader/Gmailmenu";
import Search from "./Homeheader/Search"

function EmailHeader() {
    return (
        <header className="header">
            <GmailMenu/>
            <Search/>
        </header>
    )
}

export default EmailHeader