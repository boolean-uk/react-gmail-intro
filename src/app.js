import './styles/app.css'

import Header from './Header.js'
import Leftmenu from './Leftmenu.js'
import EmailView from './EmailView.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Leftmenu />
      <EmailView />
    </div>
  )
}

export default App