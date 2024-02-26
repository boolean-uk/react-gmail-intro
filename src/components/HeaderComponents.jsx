import '../styles/Header.css'
import {
    MenuIcon,
    GmailLogo,
} from './ImageComponents.jsx'

export function LeftMenuIcons() {
    return (
        <div className="left-menu">
            <MenuIcon />
            <GmailLogo />
        </div>
    )
}

export function SearchBar() {
    return (
        <div className="search">
            <input className="search-bar" placeholder="Search mail" />
        </div>
    )
}

export function Header() {
    return (
        <header className="header">
            <LeftMenuIcons />
            <SearchBar />
        </header>
    )
}