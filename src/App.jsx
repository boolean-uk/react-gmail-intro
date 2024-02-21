import './styles/App.css'

import Header from './Header'
import Navigation from './Nav'
import MainBody from './Body'

function App() {
  return (
    <div className="app">
      <header className="header">
        <Header></Header>
      </header>
      <nav className="left-menu">
        <Navigation></Navigation>
      </nav>
      <main className="email-view">
        <MainBody></MainBody>
      </main>
    </div>
  )
}

export default App
