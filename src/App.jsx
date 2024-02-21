import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import Header from './Header'
import LeftMenu from './LeftMenu'
import EmailToolbar from './EmailToolbar'
import EmailContent from './EmailContent'
import WriteEmail from './WriteEmail'

function App() {
  return (
    <div className="app">
       <Header />
       <LeftMenu />
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
        <WriteEmail />
      </main>
    </div>
  )
}

export default App
