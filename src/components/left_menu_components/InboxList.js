import '../../styles/left_menu.css'

import ActiveItem from './ActiveItem'
import HideRead from './HideRead'
import Item from './Item'

function InboxList() {
  return (
    <ul className="inbox-list">
      <ActiveItem />
      <Item />
      <HideRead />
    </ul>
  )
}

export default InboxList