import ReplyActions from "./ReplyActions"

function ContentReply() {
    return(
        <div className="reply-container">
            <input type="text" size={85} className="reply-field"></input>
            <ReplyActions />

        </div>
        
    )
}

export default ContentReply