import './styles/App.css'

import Header from './Header/index.jsx'
import Main from './Main/index.jsx'
import NavLeftMenu from './NavLeftMenu/index.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <NavLeftMenu />
      <Main />
    </div>
  )
}

export default App
