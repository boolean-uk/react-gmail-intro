
import EmailToolBar from './Email-view/email-toolbar'
import Title from './Email-view/Email-Content/Title.jsx'
import Info from './Email-view/Email-Content/Header/Info'
import Icons from './Email-view/Email-Content/Header/Icons'
import EmailBody from './Email-view/Email-Content/Email-Body'
import EmailActions from './Email-view/Email-Content/Email-Actions'

function Main() {
    return (
        <>
        <main className="email-view">
        <EmailToolBar></EmailToolBar>
        <article className="email-content">
          <Title></Title>
          <header className="email-content--header">
            <Info></Info>
            <Icons></Icons>
          </header>
          <section className="email-body">
          <EmailBody></EmailBody>
          </section>
          <section className="email-actions">
            <EmailActions></EmailActions>
          </section>
        </article>
      </main>
        </>
    )
}

export default Main