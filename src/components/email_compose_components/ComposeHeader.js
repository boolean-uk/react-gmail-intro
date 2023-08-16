import '../../styles/email_compose.css'

import EmailReceiver from './EmailReceiver'
import ExpandButton from './ExpandButton'
import MoreOptionsButton from './MoreOptionsButton'
import ReplyButton from './ReplyButton'

function ComposeHeader() {
  return (
    <div className="header-container">
      <ReplyButton />
      <MoreOptionsButton />
      <EmailReceiver />
      <ExpandButton />
    </div>
  )
}

export default ComposeHeader