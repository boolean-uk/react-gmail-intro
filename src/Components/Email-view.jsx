import Email from "./Email view/Email";
import Response from "./Email view/Response";
import Toolbar from "./Email view/Toolbar";

function EmailView() {
    return (
        <main className="email-view">
            <Toolbar/>
            <Email/>
            <Response/>
        </main>

    )
}

export default EmailView