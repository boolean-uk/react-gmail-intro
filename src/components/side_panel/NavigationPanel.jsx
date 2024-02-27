import InboxActiveItemComponent from './inbox_items/InboxActiveItem.jsx'
import InboxItemComponent from './inbox_items/InboxItem.jsx'
import InboxItemToggle from './inbox_items/InboxItemToggle.jsx'

function NavigationPanelComponent() {
  return (
      <nav className="left-menu">
        <ul className="inbox-list">
          <InboxActiveItemComponent label="Inbox" count={3}/>
          <InboxItemComponent label={"Starred"} count={2} />
          <InboxItemToggle label="Hide Read" count={false}/>
        </ul>
      </nav>
  )
}

export default NavigationPanelComponent