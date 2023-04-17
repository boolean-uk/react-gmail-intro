import './MainContent.css'
import flaticonWelcomeImage from 'assets/images/flaticon-welcome-image.png'
import backArrow from 'assets/icons/back-arrow.png'
import downloadButton from 'assets/icons/download-button.png'
import rateStarButton from 'assets/icons/rate-star-button.png'
import rubbishButton from 'assets/icons/rubbish-bin-delete-button.png'
import MainEmailToolbar from './MainEmailToolbar/MainEmailToolbar'
import MainEmailContent from './MainEmailContent/MainEmailContent'

function MainContent (){
    return (
        <main className="email-view">
        <MainEmailToolbar />
        <MainEmailContent />
      </main>
    )
}

export default MainContent