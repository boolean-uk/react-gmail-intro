import '../../styles/email_compose.css'

import ActionsList from './ActionsList'
import MoreActionsList from './MoreActionsList'
import SendButton from './SendButton'

function ComposeActions() {
  return (
    <div className="compose-actions">
      <SendButton />
      <ActionsList />
      <MoreActionsList />
    </div>
  )
}

export default ComposeActions