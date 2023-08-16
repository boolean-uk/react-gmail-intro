import '../styles/app.css'

import LeftMenu from './header_components/LeftMenu'
import SearchBar from './header_components/SearchBar'

function Header() {
  return (
    <header className="header">
      <LeftMenu />
      <SearchBar />
    </header>
  )
}

export default Header