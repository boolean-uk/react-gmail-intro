import MailContents from "./MailContents"
import MailToolBar from "./MailToolBar"

function MailBody() {
    return (
        <main className="email-view">
        <MailToolBar />
        <MailContents />
      </main>
    )
}

export default MailBody
