import SenderInfoDiv from "./SenderInfoDiv";
import UserInfoDiv from "./UserInfoDiv";

function EmailInfoDiv() {
    return (
        <div className="email-info">
            <SenderInfoDiv />
            <UserInfoDiv />
        </div>
    );
}

export default EmailInfoDiv;
