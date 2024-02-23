import './styles/App.css'
import './styles/Header.css'
import './styles/Left_menu.css'
import './styles/Message.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Main from './Components/Main'

function App() {
  return (
    <div className="app">      
    <Header/>
    <Nav/>
    <Main/> 
    </div>
  )
}

export default App
