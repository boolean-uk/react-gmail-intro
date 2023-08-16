import '../../styles/Header.css'
import Icon from '../headerComponents/Icon.js'
import Search from '../headerComponents/Search.js'

function Header () {
    return (
        <header className="header">
        <div className="left-menu">
          <Icon />
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>
        <Search />
      </header>
    )
}
export default Header