import EmailContent from "./EmailContent";
import EmailToolBar from "./EmailToolbar";

import './Main.css'


function MainComponent() {
    return (
        
        <main className="email-view">
            <EmailToolBar></EmailToolBar>
            <EmailContent></EmailContent>
        </main>
    )
}

export default MainComponent