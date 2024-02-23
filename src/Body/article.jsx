import ArticleHeader from './articleHeader'
import EmailBody from './emailBody'
import WriteEmail from './writeEmail'
function Article(){
    return (
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <ArticleHeader/>
          <EmailBody/>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>

          <WriteEmail/>
        </article>
    )
}
export default Article