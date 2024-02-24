// import './styles/App.css'


import { NavFromLeftMenu, DivFromLeftMenu } from './Menu'
import { ArtcileEmailContent, NavEmailToolbar } from './Email'
import Search from './Search'

function App() {
  return (
    <div className="app">
      <header className="header">
        <DivFromLeftMenu />
        <Search />
      </header>
      <NavFromLeftMenu />
      <main className="email-view">
        <NavEmailToolbar />
        <ArtcileEmailContent />
      </main>
    </div>
  )
}

export default App
