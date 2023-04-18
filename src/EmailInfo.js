import UserInfo from "./UserInfo.js"
import SenderInfo from "./SenderInfo.js"

function EmailInfo () {
    return (<div className="email-info">
        <SenderInfo />
        <UserInfo />
        </div>)
}

export default EmailInfo