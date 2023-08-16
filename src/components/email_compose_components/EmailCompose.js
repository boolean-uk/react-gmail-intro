import '../../styles/email_compose.css'

import ComposeBorder from './ComposeBorder'
import UserAvatar from './UserAvatar'

function EmailCompose() {
  return (
    <div className="email-compose">
      <UserAvatar />
      <ComposeBorder />
    </div>
  )
}

export default EmailCompose