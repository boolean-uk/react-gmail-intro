import './styles/app.css'
import Header from './components/header'
import LeftMenu from './components/leftmenu'
import Main from './components/main'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu />
      <Main/>
    </div>
  )
}

export default App
