import './left-menu.css'

function LeftMenuItemToggle () {
    return (
        <nav className="left-menu">
        <ul className="inbox-list">
        <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input id="hide-read" type="checkbox" checked={false} />
        </li>
        </ul>
      </nav>
       
    )
}

export default LeftMenuItemToggle