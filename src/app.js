import './styles/app.css'

// Imported HTML
import Header from './Components/Header'
import LeftMenu from './Components/LeftMenu'
import Main from './Components/Main'

function App() {
  return (
    <div className="app">
    <Header />
    <LeftMenu />
    <Main /> 
    </div>
  )
}

export default App
