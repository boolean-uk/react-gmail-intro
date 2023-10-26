import './styles/App.css'

import Header from './styles/Header.jsx'
import LeftMenu from './styles/LeftMenu.jsx'
import Body from './styles/Body.jsx'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <Body></Body>
    </div>
  )
}

export default App