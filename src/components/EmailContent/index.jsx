import "./index.css";

import flaticonWelcomeImage from "../../assets/images/flaticon-welcome-image.png";
import EmailActionIcons from "../EmailActionIcons";

function EmailContent() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <header className="email-content--header">
        <div className="avatar"></div>
        <div className="email-info">
          <div className="sender-info">
            <h2>Freepik Company</h2>
            <em>&lt;no-reply@freepik.com&gt;</em>
          </div>
          <div className="user-info">
            <p>
              to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
            </p>
          </div>
        </div>
        <div className="date-info">
          <p>17 March 2021, 09:33</p>
        </div>
        <EmailActionIcons />
      </header>
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  );
}

export default EmailContent;
