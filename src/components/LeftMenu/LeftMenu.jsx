import Active from "./Items/Active"
import Item from "./Items/Item"
import Toggle from "./Items/Toggle"

import '../../styles/LeftMenu.css'

function LeftMenu() {
    return (
        <nav className="left-menu">
        <ul className="inbox-list">
          < Active />
          < Item />
          < Toggle />
        </ul>
      </nav>
    )
}

export default LeftMenu