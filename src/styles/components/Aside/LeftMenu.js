import './leftmenu.css'
import Inbox from './MenuItems/Inbox'
import Starred from'./MenuItems/Starred'
import HideRead from './MenuItems/HideRead'

function LeftMenu() {
    return <ul className="inbox-list">
        <Inbox />
        <Starred />
        <HideRead />
   </ul>     
}
    export default LeftMenu