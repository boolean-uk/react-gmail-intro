import NavToolbar from "./navToolbar";
import EmailContent from './content';

function View () {
  return(
    <main className="email-view">
      <NavToolbar></NavToolbar>
      <EmailContent></EmailContent>
    </main>
  )
}

export default View