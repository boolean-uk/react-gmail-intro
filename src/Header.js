import './styles/Header.css'

import Search from './Search.js'
import LeftMenuHeader from './LeftMenuHeader.js'

function Header () {
    return (
    <header className="header">
    <LeftMenuHeader />
    <Search />
  </header>)
}

export default Header