import ArticleTitle from './ArticleTitle.jsx'
import ArticleHeader from './ArticleHeader.jsx'
import ArticleEmailBody from './ArticleEmailBody.jsx'
import ArticleEmailActions from './ArticleEmailActions.jsx'

function Article() {
    return (
        <article className="email-content">
          <ArticleTitle/>
          <ArticleHeader/>
          <ArticleEmailBody/>
          <ArticleEmailActions/>
        </article>
    )
}

export default Article