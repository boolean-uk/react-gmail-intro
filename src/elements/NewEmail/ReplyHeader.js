import SenderInfo from "./SenderInfo";
import SubjectField from "./SubjectField";

function ReplyHeader() {
    return (
        <div class="reply-header">
            <SenderInfo/>
            <SubjectField/>
        </div>
    );
}

export default ReplyHeader;
