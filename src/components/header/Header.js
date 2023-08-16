import './Header.css'
import LeftMenuHeader from './leftMenuHeader/LeftMenuHeader'
import Search from './search/Search'

function Header() {
    return (
      <header className="header">
        <LeftMenuHeader />
        <Search />
      </header>
    )
}
export default Header