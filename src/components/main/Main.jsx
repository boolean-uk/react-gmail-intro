import EmailToolbar from "./EmailToolbar";
import EmailContent from "./EmailContent/EmailContent";
import EmailReply from "./EmailReply";

function Main() {
  return (
    <main className="email-view">
      <EmailToolbar></EmailToolbar>
      <EmailContent></EmailContent>
      <EmailReply></EmailReply>
    </main>
  );
}

export default Main;
