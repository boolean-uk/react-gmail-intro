import './styles/App.css'

import Header from './Header/Header'
import LeftMenu from './LeftMenu/LeftMenu'
import MainBody from './MainBody/MainBody'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainBody />
    </div>
  )
}

export default App
