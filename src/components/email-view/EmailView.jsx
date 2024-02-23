import EmailContent from "./EmailContent.jsx";
import EmailHeader from "./EmailHeader.jsx";
import Toolbar from "./Toolbar.jsx";
import './styles.css'

export default function EmailView() {
    return (
        <main className="email-view">
            <Toolbar />
            <EmailHeader />
            <EmailContent />
        </main>
    )
}