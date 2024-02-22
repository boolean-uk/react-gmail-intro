import './styles/App.css'
import LeftMenu from './components/leftMenu'
import Header from './components/header'
import EmailView from './components/EmailView'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  )
}

export default App
