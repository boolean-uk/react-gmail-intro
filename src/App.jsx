import Email from './Email'
import EmailContentHeader from './EmailContentHeader'
import EmailToolbar from './EmailToolbar'
import HeaderApp from './HeaderApp'
import LeftMenu from './LeftMenu'
import './styles/App.css'



function App() {
  return (
    <div className="app">
      
      <HeaderApp />
      <LeftMenu />
      <main className="email-view">
      <EmailToolbar/>
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
        <EmailContentHeader />
          <Email />
        </article>
      </main>
    </div>
  )
}

export default App
