import ReplyIcon from "./ReplyIcon";
import SenderEmail from "./SenderEmail";
import SenderImage from "./SenderImage";
import SenderName from "./SenderName";

function SenderInfo() {
    return (
        <div class="sender-info">
           <SenderImage/>
           <ReplyIcon/>
           <SenderName/>
           <SenderEmail/>
        </div>
    );
}

export default SenderInfo;
