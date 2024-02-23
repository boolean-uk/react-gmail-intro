import ArticleHeader from './ArticleHeader/ArticleHeader'
import EmailBody from './EmailBody/EmailBody'
import "./Article.css"

const Article = () => {
    return (
        <article className="email-content">
            <div className="title">
                <h1>Welcome to Flaticon</h1>
            </div>
            <ArticleHeader></ArticleHeader>
            <EmailBody></EmailBody>
        </article>
    )
}

export default Article