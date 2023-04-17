import './left-menu.css'

function LeftMenuItemActive () {
    return(
        <nav className="left-menu">
            <ul className="inbox-list">
                <li className="item active">
                    <span className="label">Inbox</span>
                    <span className="count">3</span>
                </li>
             </ul>
          </nav>
 )
        
}
export default LeftMenuItemActive