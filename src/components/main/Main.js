import backArrow from '../../assets/icons/back-arrow.png'
import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'
import rateStarButton from '../../assets/icons/rate-star-button.png'
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'

// Added myself
import MainNav from './MainNav'
import MainMail from './MainMail'
function Main(){
    return (<main className="email-view">
        <MainNav/>
        <MainMail/>
      </main>)
}
export default Main