import EmailTitleComponent from './email_info/EmailTitle'
import EmailContentHeaderComponent from './email_info/EmailContentHeader'
import EmailBodyComponent from './email_info/EmailBody'
import flaticonWelcomeImage from 'C:/Users/MFre01/Projects/Class/W8D1/react-gmail-intro/src/assets/images/flaticon-welcome-image.png'

function EmailContentComponent() {
  return (
    <article className="email-content">
        <EmailTitleComponent/>
        <EmailContentHeaderComponent/>
        <EmailBodyComponent source={flaticonWelcomeImage} alt={"Flaticon welcome message"}/>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  )
}

export default EmailContentComponent