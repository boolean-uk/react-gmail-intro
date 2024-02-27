import Actions from "./TheMail/Actions";
import Mailbody from "./TheMail/Mailbody";
import Mailheader from "./TheMail/Mailheader";
import Title from "./TheMail/Title";

function Email() {
    return(
        <article className="email-content">
            <Title/>
            <Mailheader/>
            <Mailbody/>
            <Actions/>
        </article>
    )
}

export default Email