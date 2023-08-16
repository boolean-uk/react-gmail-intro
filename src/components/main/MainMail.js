
import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'

// Added myself
import MainFooter from './MainFooter'
import MainMailHeader from './MainMailHeader'

function MainMail(){
    return(<article className="email-content">
    <div className="title">
      <h1>Welcome to Flaticon</h1>
    </div>
    <MainMailHeader/>
    <section className="email-body">
      <div className="content">
        <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
      </div>
    </section>
    <MainFooter/>
  </article>)
}
export default MainMail