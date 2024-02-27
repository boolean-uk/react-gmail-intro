import './styles/Email.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import EmailHeader from "./EmailHeader"
import EmailToolBar from './EmailToolBar'

function Email(){
    return(
      <main className="email-view">
        <EmailToolBar />
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
        </article>
        </main>
    )
}
export default Email