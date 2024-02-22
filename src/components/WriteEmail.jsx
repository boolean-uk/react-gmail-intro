import WriteEmailActionBar from "./WriteEmailActionBar"
import '../styles/WriteEmail.css';
export default function WriteEmail() {
    return (
        <div className="write-email">
            <h1>Write a new Email</h1>
            <div className="message-box">
                <textarea placeholder="↪️Skjalg Hodneland (no-reply@no.experis.com)"></textarea>
                <WriteEmailActionBar />
            </div>
        </div>
    )
}