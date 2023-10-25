import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

// Import compoments
import Header from './Header'
import NavLeft from './NavLeft'
import MainSec from './MainSec'

function App() {
  return (
    <div className="app">
      {/* Header */}
    
    <Header></Header>
      
      {/* Nav-Left */}
   <NavLeft></NavLeft>

      {/* Main */}
     <MainSec></MainSec>
    </div>
  )
}

export default App
