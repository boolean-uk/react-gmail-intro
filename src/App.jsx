import './styles/App.css'
import Header from './Header'
import LeftMenu from './LeftMenu'
import EmailContent from './EmailContent'
import EmailToolbar from './EmailToolbar'
import EmailAnswear from './EmailAnswer'


function App() {
  return (
    <div className="app">
      <header className="header">
        <Header></Header>
      </header>
        <LeftMenu></LeftMenu>
      <main className="email-view">
        <EmailToolbar></EmailToolbar>
        <EmailContent></EmailContent>
        <EmailAnswear></EmailAnswear>
      </main>
    </div>
  )
}

export default App
