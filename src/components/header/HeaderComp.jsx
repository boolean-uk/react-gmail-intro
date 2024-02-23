import LeftMenu from './LeftMenuHeader.jsx'
import './HeaderStyle.css'
function HeaderComponent (){
    return(
        <>
        <header className='header'>
          <LeftMenu></LeftMenu>

          <div className="search">
            <input className="search-bar" placeholder="Search mail" />
          </div>
        </header>
        
        </>
    )
}

export default HeaderComponent