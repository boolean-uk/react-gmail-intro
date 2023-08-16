import '../../styles/email_content.css'

import ForwardButton from './ForwardButton'
import ReplyButton from './ReplyButton'

function EmailActions() {
  return (
    <section className="email-actions">
      <ReplyButton />
      <ForwardButton />
    </section>
  )
}

export default EmailActions