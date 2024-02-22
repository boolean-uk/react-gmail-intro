import './styles/App.css'
import Header from "./Components/Header/Header"
import Navigation from "./Components/Header/Navigation/Navigation"
import EmailView from "./Components/EmailView/EmailView"


function App() {
  return (
    <div className="app">
      <Header></Header>
      <Navigation></Navigation>
      <EmailView></EmailView>
    </div>
  )
}

export default App
