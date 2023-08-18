import "../styles/main.css";

import EmailToolbar from "./mainComponents/EmailToolbar";
import EmailHeader from "./mainComponents/EmailHeader";
import EmailBody from "./mainComponents/EmailBody";
import EmailActions from "./mainComponents/EmailActions";
import Email from "./mainComponents/Email";

function Main() {
  return (
    <main className="email-view">
      <EmailToolbar />

      <article className="email-content">
        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>
        <EmailHeader />

        <EmailBody />

        <EmailActions />

        <Email />
      </article>
    </main>
  );
}
export default Main;
