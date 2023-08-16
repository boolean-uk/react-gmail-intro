import './styles/app.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

import Header from './components/Header.js'
import LeftNavi from './components/LeftNavi.js'
import Toolbar from './components/Toolbar.js'
import ContentEmail from './components/ContentEmail.js'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftNavi />
      <main className="email-view">
        <Toolbar />
        <ContentEmail />
      </main>
    </div>
  )
}

export default App
