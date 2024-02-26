import './styles/App.css'




import Header from './components/01_header/Header'
import LeftMenu from './components/02_left_menu/LeftMenu'
import Email from './components/03_email/Email'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Email />
    </div>
  )
}

export default App
