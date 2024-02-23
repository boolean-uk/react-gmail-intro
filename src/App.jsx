import './styles/App.css'
import HeaderTop from './Header'
import MainContent from './MainContent'
import LeftMenu from './LeftMenu'



function App() {
  return (
    <div className="app">
      <HeaderTop />

      <LeftMenu />

      <MainContent />
    </div>
  )
}

export default App
