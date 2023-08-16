import DeleteIcon from "./DeleteIcon";
import ReplyIcon from "./ReplyIcon";
import StarIcon from "./StarIcon";
function EmailActionIcons() {
    return (
        <div className="email-action-icons">
            <ul>
                <ReplyIcon />
                <StarIcon />
                <DeleteIcon />
            </ul>
        </div>
    );
}

export default EmailActionIcons;
