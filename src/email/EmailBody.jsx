import flaticonWelcomeImage from "../assets/images/flaticon-welcome-image.png";

import '../styles/EmailBody.css'
import '../styles/EmailAction.css'
function EmailBody() {
  return (
    <>
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </>
  );
}
export default EmailBody;
