import './styles/App.css'
import HeaderComponent from './components/Header'
import LeftMenuComponent from './components/Left-Menu'
import BodyComponent from './components/Body'

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <LeftMenuComponent />
      <BodyComponent />
    </div>
  )
}

export default App
