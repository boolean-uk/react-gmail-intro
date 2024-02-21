import "./styles/WriteEmail.css";

import backArrow from "./assets/icons/back-arrow.png";

function WriteEmail() {
  return (
    <header className="write-email">
      <div className="avatar"></div>
      <div className="msg-box">
        <nav className="msg-toolbar">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <p>Freepik Company &lt;no-reply@freepik.com&gt;</p>
            </li>
          </ul>
        </nav>
        <div className="message-info">
          <div className="user-info">
            <span></span>
          </div>
          <section className="send-button">
            <button>Send</button>
          </section>
        </div>
      </div>
    </header>
  );
}

export default WriteEmail;
