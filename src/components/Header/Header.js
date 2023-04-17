import LeftMenu from '../LeftMenu/LeftMenu'
import SearchBar from '../SearchBar/SearchBar'

import './Header.css'

const Header = () => {
  return(
    <header className="header">
      <LeftMenu />
      <SearchBar />
    </header>
  )
}

export default Header
