
import HeaderArticle from './article elements/ArticleHeader'
import ArticleSectionBody from './article elements/ArticleSectionBody'
import ArticleSectionButtons from './article elements/ArticleSectionButtons'

function Article() {
    return (
        <article className="email-content">
            <div className="title">
                <h1>Welcome to Flaticon</h1>
            </div>
            <HeaderArticle />
            <ArticleSectionBody />
            <ArticleSectionButtons />

        </article>
    )
}
export default Article