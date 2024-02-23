import './styles/App.css'

import Header from './components/Header.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import Body from './components/Body.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Body />
    </div>
  )
}

export default App
