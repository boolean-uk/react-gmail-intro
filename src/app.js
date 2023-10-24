import './styles/app.css'

import Header from './components/Header'
import Leftmenu from './components/Leftmenu'
import Emailview from './components/Emailview'

function App() {
  return (
    <div className="app">
      <Header />
      <Leftmenu />
      <Emailview />
    </div>
  )
}

export default App