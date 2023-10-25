import "../styles/Nav.css"

const Inbox = () => {
    return (
    <li className="item active">
      <span className="label">Inbox</span>
      <span className="count">3</span>
    </li>
    )
}

const Starred = () => {
    return (
    <li className="item">
      <span className="label">Starred</span>
      <span className="count">2</span>
    </li>
    )
}

const HideRead = () => {
    return (
    <li className="item toggle">
      <label htmlFor="hide-read">Hide read</label>
      <input id="hide-read" type="checkbox" checked={false} />
    </li>
    )
}

const Nav = () => {
    return (
        <nav className="left-menu">
        <ul className="inbox-list">
            <Inbox></Inbox>
            <Starred></Starred>
            <HideRead></HideRead>
        </ul>
      </nav>
    )
};

export default Nav