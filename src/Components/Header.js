import IconsHeader from "./HeaderComponents/IconsHeader"
import SearchHeader from "./HeaderComponents/SearchHeader"
import './header.css'

function Header(){
  return  <header className="header">
  <IconsHeader />
  <SearchHeader />
  
</header>
}
export default Header