import Buttons from "./buttonList"
import SpacePages from "./spacePages"
import '../../styles/nav-toolbar.css'

function Toolbar() {
    return <nav className='email-toolbar'>
        <Buttons/>
        <SpacePages/>
    </nav>
}
export default Toolbar