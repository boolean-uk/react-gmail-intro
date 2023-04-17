import './styles/app.css'

import Header from './components/header/header.js'
import Nav from './components/nav/nav.js'
import Main from './components/main/main.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default App
