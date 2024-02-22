import EmailViewContentActions from './EmailViewContentActions'
import EmailViewContentBody from './EmailViewContentBody'
import EmailViewContentHeader from './EmailViewContentHeader'
import EmailViewContentWrite from './EmailViewContentWrirte'

function EmailViewContent() {
    return (
        <article className="email-content">
            <EmailViewContentHeader/>
            <EmailViewContentBody />
            <EmailViewContentActions />
            <EmailViewContentWrite />
        </article>
    )
}

export default EmailViewContent