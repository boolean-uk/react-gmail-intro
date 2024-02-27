import './styles/App.css'
import EmailView from './Components/Email-view'
import Header from './Components/Header'
import LeftMenu from './Components/Left-menu'

function App() {
  return (
    <div className="app">
        <Header/>
        <LeftMenu/>
        <EmailView/>
    </div>
  )
}

export default App
