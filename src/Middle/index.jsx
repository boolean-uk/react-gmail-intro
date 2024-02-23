
import ToolBar from "./ToolBar.jsx"
import Header from "./Article/Header.jsx"
import Title from "./Article/Title.jsx"
import Body from "./Article/Body.jsx"
import Actions from "./Article/Actions.jsx"
import "./style.css"

function Middle(){
    return (
        <main className="email-view">
            <ToolBar/>
            <article className="email-content">
                <Header/>
                <Title/>
                <Body/>
                <Actions/>
            </article>
        
        </main>
    
    )
}

export default Middle