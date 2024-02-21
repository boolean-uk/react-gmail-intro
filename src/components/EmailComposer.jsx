import React from "react";

function EmailComposer() {
  return (
    <div className="email-composer">
      <input type="text" placeholder="To" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Compose email" />
      <button>Send</button>
    </div>
  );
}

export default EmailComposer;
