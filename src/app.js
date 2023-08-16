import './styles/app.css'

// My added stuff
import Menu from './components/header/Menu'
import LeftMenu from './components/leftmenu/LeftNav'
import Main from './components/main/Main'

function App() {
  return (
    <div className="app">
      <Menu/>
      <LeftMenu/>
      <Main/>
    </div>
  )
}

export default App
