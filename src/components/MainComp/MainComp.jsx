import EmailActions from "./EmailActions";
import EmailBody from "./EmailBody";
import EmailHeader from "./EmailHeader";
import EmailTitle from "./EmailTitle";
import EmailToolbar from "./EmailToolbar";

export default function MainComp() {
  return (
    <main className="email-view">
      <EmailToolbar />
        <article className="email-content">
          <EmailTitle />
          <EmailHeader />
          <EmailBody />
          <EmailActions />  
        </article>
      </main>
  )
}