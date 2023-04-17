import './styles/app.css'

import HeaderLeftMenu from './header/header-left-menu.js'
import HeaderSearch from './header/header-search.js'
import LeftMenuItemToggle from './left-menu/left-menu-item-toggle.js'
import LeftMenuItemActive from './left-menu/left-menu-active-item.js'
import LeftMenuItem from './left-menu/left-menu-item.js'
import EmailView from './email-view/email-view.js'
import EmailToolbar from './email-view/email-view.js'
import EmailContent from './email-view/email-content.js'

function App() {
  return (
    <div className="app">
      <HeaderLeftMenu/>
      <HeaderSearch/>
      <nav className="left-menu">
      <ul className="inbox-list">
      <LeftMenuItemActive/>
      <LeftMenuItem/>
      <LeftMenuItemToggle/>
      </ul>
      </nav>
      <main className="email-view">
      <EmailToolbar/>
      <EmailContent/>
      </main>
      
    </div>
  )
}

export default App
