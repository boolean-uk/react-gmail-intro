import React from 'react'
import MenuIcon from './MenuIcon'
import SearchBar from './SearchBar'

function HeaderComponent() {
  return (
    <>
        <header className="header">
            <div className="left-menu">
            <MenuIcon/>
            </div>

            <div className="search">
            <SearchBar/>
            </div>
        </header>
    </>
  )
}

export default HeaderComponent