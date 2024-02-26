import {
    ReplyButtonImage,
    ArchiveButtonImage,
    DeleteButtonImage,
    StarButtonImage,
    FlaticonWelcomeImage
} from './ImageComponents.jsx'

function EmailComposer() {
    return (
        <div className="email-composer">
            <div className="email-composer-toolbar">
                {/* Add buttons or icons for formatting options here */}
                <button className="email-composer-send">Send</button>
                {/* Add icons for text formatting */}
            </div>
            <textarea className="email-composer-body" placeholder="Compose your email..."></textarea>
            {/* Add additional icons or buttons for further actions */}
        </div>
    );
}


export function EmailView() {
    return (
        <main className="email-view">
            <nav className="email-toolbar">
                <ul>
                    <ReplyButtonImage />
                    <ArchiveButtonImage />
                    <DeleteButtonImage />
                </ul>
                <div className="space"></div>
                <div>
                    <p>1 of 25</p>
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </nav>
            <article className="email-content">
                <div className="title">
                    <h1>Welcome to Flaticon</h1>
                </div>
                <header className="email-content--header">
                    <div className="avatar"></div>
                    <div className="email-info">
                        <div className="sender-info">
                            <h2>Freepik Company</h2>
                            <em>&lt;no-reply@freepik.com&gt;</em>
                        </div>
                        <div className="user-info">
                            <p>
                                to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                            </p>
                        </div>
                    </div>
                    <div className="date-info">
                        <p>17 March 2021, 09:33</p>
                    </div>
                    <div className="email-action-icons">
                        <ul>
                            <ReplyButtonImage />
                            <StarButtonImage />
                            <DeleteButtonImage />
                        </ul>
                    </div>
                </header>
                <section className="email-body">
                    <div className="content">
                        <FlaticonWelcomeImage />
                    </div>
                </section>
                <section className="email-actions">
                    <button>Reply</button>
                    <button>Forward</button>
                </section>
                <EmailComposer />
            </article>
        </main>
    )
}