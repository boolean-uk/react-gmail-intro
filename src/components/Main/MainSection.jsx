import EmailToolbar from './Email/EmailToolbar'
import EmailContent from './Email/EmailContent';
import "./Main.css"

function MainSection() {
  return (
    <main className="email-view">
    <EmailToolbar />
      <EmailContent />
    </main>
  );
}

export default MainSection