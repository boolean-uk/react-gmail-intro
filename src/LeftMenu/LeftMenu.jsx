import '../styles/LeftMenu.css'

import HideRead from "./HideRead"
import InboxButton from "./InboxButton"
import StarredButton from "./StarredButton"

function LeftMenu() {
    return (
        <nav className="left-menu">
        <ul className="inbox-list">
          <InboxButton />
          <StarredButton />
          <HideRead />
        </ul>
      </nav>
    )
}

export default LeftMenu