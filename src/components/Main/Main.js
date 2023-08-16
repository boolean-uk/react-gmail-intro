import Toolbars from "./nav-toolbar"
import Article from "./article"
import EmailForm from "../Extension/emailForm"
import '../../styles/main.css'

function Main() {
    return <main className='email-view'>
        <Toolbars/>
        <Article/>
        <EmailForm/>
    </main>
}
export default Main