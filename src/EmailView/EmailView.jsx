import Body from './EmailViewParts/Body'
import Header from './EmailViewParts/Header'
import ToolBar from './EmailViewParts/ToolBar'


function EmailView() {
    return (
        <main className="email-view">
            
            <ToolBar />

            <article className="email-content">
                <div className="title">
                    <h1>Welcome to Flaticon</h1>
                </div>

                <Header />

                <Body />

            </article>

        </main>
    )
}

export default EmailView