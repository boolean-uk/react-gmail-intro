import "../styles/GmailMainInput.css";

export default function GmailMainInput() {
  return (
    <div className="email-action-container">
      <textarea
        type="textarea"
        className="email-action-input"
        placeholder="Freepik Company (no-reply@freepik.com)"
      />
      <div className="email-action-button-group">
        <button className="email-action-button">Send</button>
        <img
          className="arrow-down"
          src="https://charbase.com/images/glyph/9660"
        />
      </div>
    </div>
  );
}
