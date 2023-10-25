import './styles/App.css'
import Header from './components/header.jsx'
import LeftMenu from './components/LeftMenuAll.jsx'
import Main from './components/Main.jsx'

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