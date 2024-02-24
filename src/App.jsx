import './styles/App.css'
import { Top } from './top/Top.jsx'
import { TopNav } from './top/TopNav.jsx'
import { Email } from './email/Email.jsx'

function App() {
  return (
    <div className="app">
      <Top/>
      <TopNav/>
      <Email/>
    </div>
  )
}

export default App
