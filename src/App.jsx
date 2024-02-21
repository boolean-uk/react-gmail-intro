import './styles/App.css'
import Top from  './Top.jsx'


import LeftMenu from './LeftMenu.jsx'
import Toolbar from './Toolbar.jsx'
import EmailContentHeader from './EmailContentHeader.jsx'
import Email from './Email.jsx'

function App() {
  return (
    <div className="app">
      <Top />
      <LeftMenu />


      <main className="email-view">
        <Toolbar />

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
