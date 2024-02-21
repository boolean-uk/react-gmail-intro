import './styles/App.css'

import Header from "./Components/Header/Header"
import Navigation from "./Components/Navigation/Navigation"
import Body from "./Components/Body/Body"

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Navigation></Navigation>
      <Body></Body>
    </div>
  )
}

export default App
