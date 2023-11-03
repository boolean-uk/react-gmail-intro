import './styles/App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import MainBody from './components/Main/MainBody'

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
