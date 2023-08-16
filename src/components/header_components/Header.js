import '../../styles/header.css'

import LeftMenu from './LeftMenu'
import SearchBar from './SearchBar'

function Header() {
  return (
    <header className="header">
      <LeftMenu />
      <SearchBar />
    </header>
  )
}

export default Header