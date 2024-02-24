import './styles.css'

import LeftMenu from './LeftMenu'
import SearchBar from './SearchBar'

function HeaderMain() {
  return (
    <header className="header">
      
      <LeftMenu/>

      <SearchBar/>

    </header>
  )
}

export default HeaderMain