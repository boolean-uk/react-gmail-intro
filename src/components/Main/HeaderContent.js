import EmailInfo from "./emailInfo"
import DateInfo from "./dateInfo"
import ActionIcons from "./actionIcons"
import '../../styles/contentHeader.css'

function HeaderContent() {
    return <header className="email-content--header">
        <EmailInfo/>
        <DateInfo/>
        <ActionIcons/>
    </header>
}
export default HeaderContent