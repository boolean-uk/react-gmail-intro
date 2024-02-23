import './styles/App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Email from './components/Email'
import WriteEmail from './components/WriteEmail'

function App() {
  return (
    <div className="app">
      <Header/>
      <Sidebar/>
      <Email/>
      <WriteEmail/>
    </div>
  )
}

export default App
