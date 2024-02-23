import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

import Header from './Header/Header.jsx'
import LeftMenu from './LeftMenu/LeftMenu.jsx'
import EmailView from './EmailView/EmailView.jsx'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <EmailView/>
    </div>
  )
}

export default App
