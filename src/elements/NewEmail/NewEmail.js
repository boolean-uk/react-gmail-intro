import "../../styles/newEmail.css";
import ReplyBody from "./ReplyBody";
import ReplyFooter from "./ReplyFooter";
import ReplyHeader from "./ReplyHeader";

function NewEmail() {
    return (
        <div class="reply-view">
            <ReplyHeader />
            <ReplyBody />
            <ReplyFooter />
        </div>
    );
}

export default NewEmail;
