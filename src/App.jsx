import './styles/App.css'
import Header from './components/Header/Header'
import LeftSideMenu from './components/LeftSideMenu'
import MainComp from './components/MainComp/MainComp'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftSideMenu />
      <MainComp />
    </div>
  )
}

export default App
