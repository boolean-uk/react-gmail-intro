import React from 'react'
import LeftMenuHeader from './Header/LeftMenuHeader'
import SearchBar from './Header/SearchBar';
import '../styles/Header/Header.css'




class Header extends React.Component {
    render() {
      return(
        <header className="header">
            
        <LeftMenuHeader />
        <SearchBar />

        </header>
      ) 
      
      }
    }

    export default Header;