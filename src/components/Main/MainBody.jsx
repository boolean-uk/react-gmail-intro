import EmailToolbar from './Email-View/Email-Toolbar'
import Title from './Email-View/Email-Content/Title'
import Info from './Email-View/Email-Content/Content-Header/Info'
import ActionIcons from './Email-View/Email-Content/Content-Header/Action-Icons'
import EmailBody from './Email-View/Email-Body/EmailBody'
import EmailActions from './Email-View/Email-Actions/EmailActions'
import WriteEmail from './Email-View/Write-Email/Write-Email'
import '../../styles/email-content/content-header.css'

function MainBody() {
    return (
        <>
        <main className="email-view">
        <EmailToolbar />

        <article className="email-content">
          <Title />

          <header className="email-content--header">
            <Info />
            <ActionIcons />
          </header>

          <EmailBody />

          <EmailActions />
          <WriteEmail />
        </article>
      </main>
      </>
    )
}

export default MainBody