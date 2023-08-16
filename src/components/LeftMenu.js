import '../styles/app.css'
import InboxList from './left_menu_components/InboxList'

function LeftMenu() {
  return (
    <nav className="left-menu">
      <InboxList />
    </nav>
  )
}

export default LeftMenu