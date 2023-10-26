import './styles/App.css'
import Header from `./Header.jsx`
import LeftMenu from './Leftmenu.jsx'
import EmailView from './EmailView.jsx'
import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView /> 
    </div>
  )
}

export default App
