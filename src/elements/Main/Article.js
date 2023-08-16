import ArticleTitleDiv from "./ArticleTitleDiv";
import ArticleHeader from "./ArticleHeader";
import ArticleSectionBody from "./ArticleSectionBody";
import ArticleSectionActions from "./ArticleSectionActions";

function Article() {
    return (
        <article className="email-content">
            <ArticleTitleDiv />
            <ArticleHeader />
            <ArticleSectionBody />
            <ArticleSectionActions />
        </article>
    );
}

export default Article;
