import WriteEmailActionBar from "./WriteEmailActionBar"
import '../styles/WriteEmail.css';
export default function WriteEmail() {
    return (
        <div className="write-email">
            <h1>Write a new Email</h1>
            <div className="message-box">
                <textarea placeholder="↪Alexander Ellnestam (no-reply@se.experis.com)"></textarea>
                <WriteEmailActionBar />
            </div>
        </div>
    )
}