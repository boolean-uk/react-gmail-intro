
import EmailToolbar from "./email/EmailToolbar";
import EmailContent from "./email/EmailContent";

function AppBody() {
  return (
    <main className="email-view">
      <EmailToolbar/>
      <EmailContent/>
    </main>
  );
}
export default AppBody
