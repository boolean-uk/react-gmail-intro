import EmailViewContentActions from './EmailViewContentActions'
import EmailViewContentBody from './EmailViewContentBody'
import EmailViewContentHeader from './EmailViewContentHeader'

function EmailViewContent() {
    return (
        <article className="email-content">
            <EmailViewContentHeader/>
            <EmailViewContentBody />
            <EmailViewContentActions />
        </article>
    )
}

export default EmailViewContent