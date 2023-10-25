import './styles/App.css'
import Header from './Components/Header.jsx'
import LeftMenu from './Components/LeftMenu.jsx'
import Body from './Components/Body.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Body />
    </div>
  )
}

export default App
