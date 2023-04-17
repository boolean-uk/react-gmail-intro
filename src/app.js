import './styles/app.css'
import './styles/EmailViewCSS/EmailContent.css'
import './styles/HeadersCSS/HeaderLeftMenu.css'
import './styles/HeadersCSS/HeaderSearch.css'
import './styles/LeftMenuCSS/LeftMenu.css'

// import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
// import backArrow from './assets/icons/back-arrow.png'
// import downloadButton from './assets/icons/download-button.png'
// import rateStarButton from './assets/icons/rate-star-button.png'
// import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

// imported created files
import HeaderLeftMenu from './Components/Headers/HeaderLeftMenu.js'
import HeaderSearch from './Components/Headers/HeaderSearch.js'
import LeftMenu from './Components/LeftMenu/LeftMenu.js'
import EmailToolbar from './Components/EmailView/EmailToolbar'
import EmailContent from './Components/EmailView/EmailContent'

function App() {
  return (
    <div className="app">
      <HeaderLeftMenu />
      <HeaderSearch />
      <LeftMenu />
      <main className="email-view">
      <EmailToolbar />
      <EmailContent />
      </main>
    </div>
  )
}

export default App
