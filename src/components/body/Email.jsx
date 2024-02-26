import TitleComponent from './email/Title'
import HeaderComponent from './email/Header'
import BodyComponent from './email/Body'
import ActionsComponent from './email/Actions'

function EmailComponent() {
    return (
        <article className="email-content">
            <TitleComponent />
            <HeaderComponent />
            <BodyComponent />
            <ActionsComponent />
        </article>
    )
}

export default EmailComponent