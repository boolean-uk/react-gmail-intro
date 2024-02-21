import './writeemail.css'

function WriteEmail() {
  return (
    <div className="email-composer">
      <div className="email-composer__to">
        <span>To:</span>
        <input type="text" placeholder="Recipient email address" />
      </div>
      <div className="email-composer__subject">
        <span>Subject:</span>
        <input type="text" placeholder="Subject of your email" />
      </div>
      <div className="email-composer__body">
        <textarea placeholder="Compose your email here..."></textarea>
      </div>
      <div className="email-composer__actions">
        <button type="button">Send</button>
      </div>
    </div>
  );
}

export default WriteEmail;
