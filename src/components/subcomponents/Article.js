
import HeaderArticle from './article elements/ArticleHeader'
import ArticleSectionBody from './article elements/ArticleSectionBody'
import ArticleSectionButtons from './article elements/ArticleSectionButtons'
import ArticleReplyForm from './article elements/ArticleReplyForm'

function Article() {
    return (
        <article className="email-content">
            <div className="title">
                <h1>Welcome to Flaticon</h1>
            </div>
           
            <HeaderArticle />
            <ArticleSectionBody />
            <ArticleSectionButtons />
            <ArticleReplyForm />
      
        </article>
    )
}
export default Article