import './styles/App.css'

import Header from './Header'
import LeftNav from './LeftNav'
import Main from './MainComponent'
import EmailResponse from './EmailResponse'

function App() {
  return (
    <div className="app">

      <Header />

      <LeftNav />

      <Main />

      <EmailResponse />

    </div>
  )
}

export default App
