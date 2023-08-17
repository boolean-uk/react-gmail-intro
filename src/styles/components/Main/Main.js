import EmailToolBar from './EmailToolBar/EmailToolBar'
import EmailHeader from './EmailHeaderButton.js/EmailHeader'
import Body from './Body/Body'

function Main() {
    return (<main className="email-view">
        <nav className="email-toolbar">
        <EmailToolBar />
        <EmailHeader />
        <Body />
        </nav>
    </ main>)
}
    export default Main