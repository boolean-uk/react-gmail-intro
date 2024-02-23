import EmailTitle from "../Email/EmailTitle"
import EmailHeader from "../Email/EmailHeader"
import EmailBody from "../Email/EmailBody"
import EmailActions from "../Email/EmailActions"

function MainContent () {
    return (<article className="email-content">
    <EmailTitle/>
    <EmailHeader/>
    <EmailBody/>
    <EmailActions/>
  </article>)
}

export default MainContent