import ArticleTitleDiv from "./ArticleTitleDiv";
import ArticleHeader from "./ArticleHeader";
import ArticleSectionBody from "./ArticleSectionBody";
import ArticleSectionActions from "./ArticleSectionActions";
import NewEmail from "../NewEmail/NewEmail";

function Article() {
    return (
        <article className="email-content">
            <ArticleTitleDiv />
            <ArticleHeader />
            <ArticleSectionBody />
            <ArticleSectionActions />
            <NewEmail/>

        </article>
    );
}

export default Article;
