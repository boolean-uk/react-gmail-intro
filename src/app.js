import './styles/app.css'
import MainHeader from './components/Header/Header'
import LeftMenu from './components/LeftMenu/left-menu'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="app">
      <MainHeader/>
      <LeftMenu/>
      <Main/>
    </div>
  )
}

export default App
