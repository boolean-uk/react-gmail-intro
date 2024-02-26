import ToolbarComponent from './body/Toolbar'
import EmailComponent from './body/Email'
import ResponseComponent from './body/Response'

function BodyComponent() {
    return (
        <main className="email-view">
            <ToolbarComponent />
            <EmailComponent />
            <ResponseComponent />
        </main>
    )
}

export default BodyComponent