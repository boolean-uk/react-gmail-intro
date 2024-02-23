
import EmailToolbar from './EmailToolbar'
import EmailContent from './EmailContent'
import '../../styles/Email.css'


function Email() {
    return (
      <main className="email-view">
        < EmailToolbar />
        < EmailContent />
      </main>
    )

}

export default Email