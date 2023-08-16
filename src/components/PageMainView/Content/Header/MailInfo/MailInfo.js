import Sender from "./Sender/Sender";
import User from "./User/User";

function MailInfo() {
    return (
        <div className="email-info">
            <Sender />
            <User />
        </div>
    );
}

export default MailInfo