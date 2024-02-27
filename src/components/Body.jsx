import EmailContentComponent from "./headers/EmailContent"
import EmailToolbarComponent from "./body/EmailToolbar"

function Body() {
  return (
    <main className="email-view">
        <EmailToolbarComponent/>
        <EmailContentComponent/>
      </main>
  )
}

export default Body