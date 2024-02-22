import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'
import './styles/body.css'

export function Body() {
    return (
        <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
        </section>
    )
}