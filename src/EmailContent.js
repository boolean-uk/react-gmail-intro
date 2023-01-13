import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import EmailHeader from './EmailHeader.js'
import EmailResponse from './EmailResponse'
import './styles/EmailContent.css'

const EmailContent = () => {
    return (
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <EmailHeader />
          <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
          <EmailResponse />
        </article>
    )
}

export default EmailContent