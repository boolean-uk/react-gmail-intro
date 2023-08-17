import './leftmenu.css'
import Inbox from './MenuItems/Inbox'
import Starred from'./MenuItems/Starred'
import HideRead from './MenuItems/HideRead'

function LeftMenu() {
    return (<nav className="left-menu">
        <Inbox />
        <Starred />
        <HideRead />
   </nav>) 
}
    export default LeftMenu