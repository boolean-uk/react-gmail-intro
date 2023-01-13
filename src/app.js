import './styles/app.css'

import Header from './Header'
import LeftMenu from './LeftMenu'
import EmailView from './EmailView'
import NewEmail from './NewEmail'

function App() {
    return (
        <div className="app">
            <Header/>
            <LeftMenu/>
            <EmailView/>
            <NewEmail/>
        </div>
    )
}

export default App

