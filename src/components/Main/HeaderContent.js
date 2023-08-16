import EmailInfo from "./emailInfo"
import DateInfo from "./dateInfo"
import ActionIcons from "./actionIcons"

function HeaderContent() {
    return <header className="email-content--header">
        <EmailInfo/>
        <DateInfo/>
        <ActionIcons/>
    </header>
}
export default HeaderContent