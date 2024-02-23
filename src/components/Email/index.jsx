import './styles.css'

import Toolbar from "./components/Toolbar"
import Content from "./components/Content"

function Email() {
    return (
        <main className="email-view">
        <Toolbar/>
        <Content/>
      </main>
    )
}

export default Email