import AvatarDiv from "./AvatarDiv";
import DateDiv from "./DateDiv";
import EmailActionIcons from "./EmailActionIcons";
import EmailInfoDiv from "./EmailInfoDiv";

function ArticleHeader() {
    return (
        <header className="email-content--header">
            <AvatarDiv />
            <EmailInfoDiv />
            <DateDiv />
            <EmailActionIcons />
        </header>
    );
}

export default ArticleHeader;
