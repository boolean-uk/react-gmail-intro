import EmailToolBar from './EmailToolBar/EmailToolBar'
import EmailHeader from './EmailHeaderButton.js/EmailHeader'
import Body from './Body/Body'

function Main() {
    return <main className="email-view">
        <EmailToolBar />
        <EmailHeader />
        <Body />
    </ main>
}
    export default Main