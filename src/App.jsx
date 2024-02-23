import './styles/App.css'

import Header from './components/Header'
import Main from './components/EmailView'
import LeftMenu from './components/LeftMenu'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  )
}

export default App
