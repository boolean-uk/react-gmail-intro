//import React from "react"

//import React from "react"

//import React from "react"

const InboxLeftMenu = () => {
  return (
    <nav className="left-menu">
    <ul className="inbox-list">
        {/* THIS WILL for instance be: .inbox-list .item.active */}
      <li className="item active">
        <span className="label">Inbox</span>
        <span className="count">3</span>
      </li>
       {/* THIS WILL for instance be: .inbox-list .item */}
      <li className="item">
        <span className="label">Starred</span>
        <span className="count">2</span>
      </li>

      <li className="item toggle">
        <label htmlFor="hide-read">Hide read</label>
        <input id="hide-read" type="checkbox" checked={false} />
      </li>
    </ul>
  </nav>
  )
};

export default InboxLeftMenu;
