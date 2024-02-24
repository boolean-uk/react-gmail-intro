import Textbox from "./TextBox";
import '../styles/Reply.css'
import ReplyIcons from "./ReplyIcons";

function Reply() {
    return (
        <main className="reply">
            <div className="reply-border">
                <Textbox />
                <ReplyIcons />
            </div>
        </main>
    )
}

export default Reply;