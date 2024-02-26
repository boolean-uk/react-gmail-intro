import './styles/App.css'
import { LeftMenuNavigation } from './components/LeftMenuComponents.jsx'
import { Header } from './components/HeaderComponents.jsx'
import { EmailView } from './components/EmailViewComponents.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenuNavigation />
      <EmailView />
    </div>
  )
}

export default App
