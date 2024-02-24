
import EmailContentHeader from './EmailContentHeader'
import EmailBody from './EmailBody'
import EmailActions from './EmailActions'

function EmailContent() {
    return (
        <article className="email-content">

        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>

        <EmailContentHeader/>
        
        <EmailBody/>
        
        <EmailActions/>

        {'<'}!-- Extension bit --{'>'}
        <br />
        <textarea className="new-email-input"></textarea>
        <br />
        <button>Send</button>

      </article>
    )
}

export default EmailContent