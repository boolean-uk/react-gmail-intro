import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import HeaderComponent from './components/Header'
import NavigationPanelComponent from "./components/side_panel/NavigationPanel"
import BodyComponent from "./components/Body"

function App() {
  return (
    <div className="app">
      <HeaderComponent/>
      <NavigationPanelComponent/>
      <BodyComponent/>
    </div>
  )
}

export default App