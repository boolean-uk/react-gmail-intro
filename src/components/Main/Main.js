import EmailToolbar from '../EmailToolbar/EmailToolbar'
import EmailContent from '../EmailContent/EmailContent'

import './Main.css'

const Main = () => {
  return(
    <main className="email-view">
      <EmailToolbar />
      <EmailContent />
    </main>
  )
}

export default Main
