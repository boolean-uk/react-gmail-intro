import Toolbar from './Toolbar/Toolbar.jsx'
import Article from './Article/Article.jsx'
import Form from './Form.jsx'

function Main() {
    return (
        <main className="email-view">
            <Toolbar />
            <Article />
            <Form />
        </main>
    )
}

export default Main