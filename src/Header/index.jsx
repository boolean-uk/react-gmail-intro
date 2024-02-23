import Left from './left.jsx'
import Search from './search.jsx'
import '../styles/header.css'
function Header(){
    return (
        <header className="header">
        <Left/>
        <Search/>
      </header>
    )
}
export default Header