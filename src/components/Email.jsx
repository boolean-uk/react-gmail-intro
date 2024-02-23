import '../styles/Email.css'
import EmailContent from "./EmailContent";
import EmailToolBar from "./EmailToolBar";

export default function Email(){
    return (
        <main className="email-view">
        <EmailToolBar />
        <EmailContent />
        </main>
    )
}