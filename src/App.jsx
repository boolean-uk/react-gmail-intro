import './styles/App.css'
import LeftmenuComponent from './components/header-components/LeftmenuComponent.jsx'
import SearchCompoent from './components/header-components/SearchCompoent.jsx'
import InboxLeftMenu from './components/inboxlist-components/InboxLeftMenu-component.jsx'
import EmailToolbar from './components/main-components/EmailToolbar-component.jsx'
import EmailContent from './components/main-components/EmailContent-component.jsx'



function App() {
  return (
    <div className="app">
      <header className="header">
        <LeftmenuComponent/>
        <SearchCompoent/>
      </header>

      <InboxLeftMenu/>

      <main className="email-view">
      <EmailToolbar/>
      <EmailContent/>
      </main>

    </div>
  )
}


export default App
