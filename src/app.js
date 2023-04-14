import './styles/app.css'
import Header from './components/Header'
import EmailView from './components/EmailView'
import LeftMenu from './components/LeftMenu'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <EmailView/>
    </div>
  )
}

export default App
