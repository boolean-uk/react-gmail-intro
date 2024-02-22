import './styles/App.css'

import Header from './components/header/Header'
import EmailView from './components/email_view/EmailView'
import LeftMenu from './components/left_menu/LeftMenu'

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
