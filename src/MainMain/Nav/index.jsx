import IconButtonList from './IconButtonList'
import NavButtons from './NavButtons'

function Nav() {
    return (
        <nav className="email-toolbar">

        <IconButtonList/>

        <div className="space"></div>

        <NavButtons/>

      </nav>
    )
}

export default Nav