import '../../styles/email_compose.css'

import ComposeActions from './ComposeActions'
import ComposeArea from './ComposeArea'
import ComposeHeader from './ComposeHeader'

function ComposeBorder() {
  return (
    <div className="email-border">
      <ComposeHeader />
      <ComposeArea />
      <ComposeActions />
    </div>
  )
}

export default ComposeBorder