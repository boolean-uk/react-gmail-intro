import EmailBody from '../EmailBody.jsx'
import EmailActions from '../EmailActions.jsx'
import Header from '../Article/Header/Header.jsx'

function Article() {
    return (
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <Header />
          <EmailBody />
          <EmailActions />
        </article>
    )
}

export default Article