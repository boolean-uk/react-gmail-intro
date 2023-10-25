import './styles/App.css'
import './styles/Header.css'
import './styles/Leftmenu.css'
import './styles/main.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function App() {
  return (
    <div className="app">
     
     <Header></Header>
      <Leftmenu></Leftmenu>
      <Main></Main>
    </div>
  )
}

export default App
