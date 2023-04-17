import EmailToolbar from './emailToolbar/emailToolbar'
import EmailContent from './emailContent/emailContent'

function Main() {
  return (
    <main className="email-view">
      <EmailToolbar />
      <EmailContent />
    </main>
  )
}

export default Main