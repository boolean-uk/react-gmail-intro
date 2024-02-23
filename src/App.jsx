import './styles/App.css'

import HeaderComponent from './Components/HeaderComponents/HeaderComponent'
import LeftMenu from './Components/LeftMenuComponents/LeftMenu'
import MainComponent from './Components/MainComponents/MainComponent'


function App() {
  return (
    <div className="app">
      <HeaderComponent/>
      <LeftMenu/>
      <MainComponent/>
    </div>
  )
}

export default App
