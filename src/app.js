import './styles/app.css'

import Header from './components/header/Header'
import LeftMenu from './components/menu/LeftMenu'
import EmailContent from './components/email/EmailContent'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailContent />
    </div>
  )
}

export default App
