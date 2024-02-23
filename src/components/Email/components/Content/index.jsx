import './styles.css'

import Actions from "./components/Actions"
import Body from "./components/Body"
import Header from "./components/Header"
import Title from "./components/Title"

function Content() {
    return (
        <article className="email-content">
        <Title/>
        <Header/>
        <Body/>
        <Actions/>
      </article>
    )
}

export default Content