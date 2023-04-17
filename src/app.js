import './styles/app.css'

import Header from './components/header/header'
import LeftMenu from './components/left-menu/leftMenu'
import Main from './components/main/main'

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
