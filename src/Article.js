import Title from "./Title.js"
import Header from "./Header.js"
import EmailBody from "./EmailBody.js"
import Actions from "./Actions.js"
import Write from "./Write.js"

function Article () {
    return (
        <article className="email-content">

        <Title />


        <Header />


        <EmailBody />


        <Actions />

        <Write />


        </article>
    )
}

export default Article