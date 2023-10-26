import NavToolbar from "../nav/navToolbar";
import EmailContent from './content';

function Main () {
  return(
    <main className="email-view">
      <NavToolbar></NavToolbar>
      <EmailContent></EmailContent>
    </main>
  )
}

export default Main