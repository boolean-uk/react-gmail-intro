import EmailTitle from './EmailTitle'
import EmailContentHeader from './EmailContentHeader';
import EmailBody from './EmailBody';

function EmailContent() {
    return (
        <article className="email-content">
            <EmailTitle />
            <EmailContentHeader />
            <EmailBody />

        </article>
    )
}

export default EmailContent;