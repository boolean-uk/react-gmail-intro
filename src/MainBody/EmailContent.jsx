import EmailActions from "./EmailActions";
import EmailHeader from "./EmailHeader";
import EmailMessage from "./EmailMessage";

function EmailContent() {
    return (
        <article className="email-content">
        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>
      <EmailHeader />
      <EmailMessage />
      <EmailActions />
      </article>
    )
}

export default EmailContent;