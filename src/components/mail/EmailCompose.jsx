import ComposeActionBar from "./compose/ComposeActionBar";
import ComposeHeader from "./compose/ComposeHeader";

import "../../styles/mail/EmailCompose.css"

export default function EmailCompose() {
  return (
    <div className="gmail-response-box">
      <ComposeHeader />
      <textarea className="response-textarea" placeholder=""></textarea>
      <ComposeActionBar />
    </div>
  )
}