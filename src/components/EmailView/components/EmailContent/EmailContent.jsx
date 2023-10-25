import flaticonWelcomeImage from './../../../../assets/images/flaticon-welcome-image.png'
import EmailContentHeader from './components/Header'

function EmailContent() {
return(
    <>
        <article className="email-content">
                <div className="title">
                    <h1>Welcome to Flaticon</h1>
                </div>
                <EmailContentHeader></EmailContentHeader>
                {/* each section below could also be extracted into its own function, but given their size, I'm guessing it might not be needed? */}
                <section className="email-body">
                    <div className="content">
                    <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
                    </div>
                </section>
                <section className="email-actions">
                    <button>Reply</button>
                    <button>Forward</button>
                </section>
        </article>
    </>
)

}

export default EmailContent