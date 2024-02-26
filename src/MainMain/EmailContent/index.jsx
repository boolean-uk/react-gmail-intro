
import EmailContentHeader from './EmailContentHeader'
import EmailBody from './EmailBody'
import EmailActions from './EmailActions'

function EmailContent() {
  return (
    <article className="email-content">

      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>

      <EmailContentHeader />

      <EmailBody />

      <EmailActions />


      <div className='extension'>
        <img src="../../../images/usericon.png" alt="user icon" />
        <textarea className="new-email-input"></textarea>
        <div className='bottom-panel'>
          <button>Send</button>
          <img className='littleIcons' src='../../../images/littleicons.png' alt='little icons'></img>
        </div>
      </div>

    </article>
  )
}

export default EmailContent