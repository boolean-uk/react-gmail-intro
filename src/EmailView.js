import EmailToolbar from './EmailToolbar.js'
import Title from './Title.js'
import EmailContentHeader from './EmailContentHeader.js'
import EmailActions from './EmailActions.js'
import EmailBody from './EmailBody'

function EmailView () {
    return (     
    <main className="email-view">
    <EmailToolbar />
      <article className="email-content">
        <Title />
        <EmailContentHeader />
        <EmailBody />
        <EmailActions />
      </article>
    </main>)
}

export default EmailView