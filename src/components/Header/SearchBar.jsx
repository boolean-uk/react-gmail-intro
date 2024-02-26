import React from 'react'
import '../../styles/Header/HeaderSearchBar.css'





class SearchBar extends React.Component {
    render() {
      return(
        <div className="search">
          <input className="search-bar" placeholder="Search mail" />
        </div>
      ) 
      
      }
    }

    export default SearchBar;