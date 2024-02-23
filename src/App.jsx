import './styles/App.css'


import Header from './components/header/Header'
import MenuLeft from './components/menuLeft/MenuLeft'
import EmailAction from './components/emailAction/EmailAction'

import EmailToolBar from './components/emailToolbar/EmailToolBar'
import EmailContent from './components/emailContent/EmailContent'
import WriteEmail from './components/writeEmail/WriteEmail'

function App() {
  return (
    <div className="app">
      <Header/>
      <MenuLeft/>
      <main className="email-view">
      <EmailToolBar/>
      <EmailContent/>
      <EmailAction/>
      <WriteEmail/>

      </main>
    </div>
  )
}

export default App
