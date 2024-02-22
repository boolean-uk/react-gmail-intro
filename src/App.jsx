import './styles/App.css'

//Components
import HeaderComponent from './HeaderComponent'
import MailNavigation from './MailNavigation'
import Toolbar from './Toolbar'
import MailContentComponent from './MailContentComponent'
import RespondMailComponent from './RespondMailComponent'

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <MailNavigation />
      <main className="email-view">
        <Toolbar />
        <MailContentComponent />
        <RespondMailComponent />
      </main>
    </div>
  )
}

export default App
