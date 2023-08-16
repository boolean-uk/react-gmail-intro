import ArticleForwardButton from "./ArticleForwardButton";
import ArticleReplyButton from "./ArticleReplyButton";

function ArticleSectionActions() {
    return (
        <section className="email-actions">
            <ArticleReplyButton />
            <ArticleForwardButton />
        </section>
    );
}

export default ArticleSectionActions;
