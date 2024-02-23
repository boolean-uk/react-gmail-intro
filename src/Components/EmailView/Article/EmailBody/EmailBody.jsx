import flaticonWelcomeImage from '@/assets/images/flaticon-welcome-image.png'
import ComposeEmail from "./ComposeEmail/ComposeEmail"
import "./EmailBody.css"

const EmailBody = () => {
    return (
        <>
        <section className="email-body">
            <div className="content">
                <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
        </section>
        <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
        </section>
        <ComposeEmail/>
        </>
    )
}

export default EmailBody