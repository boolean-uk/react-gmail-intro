import '../styles/Header.css'
import HeaderLeftMenu from './HeaderLeftMenu'
import HeaderSearchBar from './HeaderSearchBar'

export default function Header(){
    return (
        <header className="header">
        <HeaderLeftMenu />
        <HeaderSearchBar />  
      </header>
    )
}