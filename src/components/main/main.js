import EmailToolbar from './email-toolbar/emailToolbar'
import EmailContent from './emailContent/emailContent'
import ActionButtons from './action-buttons/actionButtons'
import QuickReply from './quick-reply/quickReply'

function Main() {
  return (
    <main className="email-view">
      <EmailToolbar />
      <EmailContent />
      <ActionButtons />
      <QuickReply />
    </main>
  )
}

export default Main