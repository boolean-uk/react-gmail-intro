import './styles/app.css'
import MainHeader from './MainHeader.js'
import LeftMenu from './LeftMenu.js'
import Main from './Main.js'

function App() {
  return (
    <div className="app">

      <MainHeader />
      <LeftMenu />

      <Main />
    </div>
  )
}


export default App
