import Toolbars from "./nav-toolbar"
import Article from "./article"
import '../../styles/main.css'

function Main() {
    return <main className='email-view'>
        <Toolbars/>
        <Article/>
    </main>
}
export default Main