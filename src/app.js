import './styles/app.css'
import Email from'./Email.js'
import LeftMenu from './Left_Menu'
import Header from './Header'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Email />
    </div>
  )
}

export default App
