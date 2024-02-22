import "../styles/GmailMain.css";

import flaticonWelcomeImage from "../assets/images/flaticon-welcome-image.png";

import GmailMainToolbar from "./GmailMainToolbar";
import GmailMainContentHeader from "./GmailMainContentHeader";
import GmailMainInput from "./GmailMainInput";

export default function GmailMain() {
  return (
    <main className="email-view">
      <GmailMainToolbar />
      <article className="email-content">
        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>
        <GmailMainContentHeader />
        <section className="email-body">
          <div className="content">
            <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
          </div>
        </section>
        <section className="email-actions">
          <button>Reply</button>
          <button>Forward</button>
        </section>
        <GmailMainInput />
      </article>
    </main>
  );
}
