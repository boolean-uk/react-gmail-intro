import EmailWrite from "./EmailWrite"

function EmailActions() {
    return(<section className="email-actions">
    <EmailWrite/>
    <button>Reply</button>
    <button>Forward</button>
  </section>)
}

export default EmailActions