import './styles/App.css'
import Header from './components/Header/Header'
import LeftSideMenu from './components/LeftSideMenu'
import MainComp from './components/MainComp/MainComp'
import Reply from './components/Reply/Reply'
function App() {
  return (
    <div className="app">
      <Header />
      <LeftSideMenu />
      <MainComp />
      <Reply />
    </div>
  )
}

export default App
