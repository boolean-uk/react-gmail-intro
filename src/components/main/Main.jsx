import EmailToolbar from "./EmailToolbar";
import EmailContent from "./EmailContent/EmailContent";

function Main() {
  return (
    <main className="email-view">
      <EmailToolbar></EmailToolbar>
      <EmailContent></EmailContent>
    </main>
  );
}

export default Main;
