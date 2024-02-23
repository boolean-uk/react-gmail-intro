import EmailBody from "./EmailBody";
import EmailHeader from "./EmailHeader";

import '../styles/Title.css'

function EmailContent() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <EmailHeader />
      <EmailBody/>
    </article>
  );
}
export default EmailContent;
