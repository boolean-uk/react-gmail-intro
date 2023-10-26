import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'


import LeftMenu from './components/header/leftMenu';
import Header from "./components/header/header";
import NavToolbar from "./components/main/navToolbar";
import EmailContent from './components/main/EmailContent/email'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <main className="email-view">
        <NavToolbar></NavToolbar>
        <EmailContent></EmailContent>
      </main>
    </div>
  )
}

export default App
