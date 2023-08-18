import HideRead from "./HideRead"
import Inbox from "./Inbox"
import Starred from "./Starred"

function MenuItems() {
    return (<ul className="inbox-list">
        <Inbox />
        <Starred />
        <HideRead />   
    </ul>)
}
    export default MenuItems



