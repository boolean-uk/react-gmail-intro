import SendButton from "./SendButton";
import Textbox from "./TextBox";
import '../styles/Reply.css'
import ReplyIcons from "./ReplyIcons";

function Reply() {
    return (
        <main className="reply">
            <SendButton />
            <Textbox />
            <ReplyIcons />
        </main>
    )
}

export default Reply;