import './styles.css'

import InboxList from "./components/InboxList"

function Sidebar() {
    return (
        <nav className="left-menu">
            <InboxList/>
      </nav>
    )
}

export default Sidebar