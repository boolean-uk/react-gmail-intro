import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import './styles/Email.css'

function Email() {
  return (
    <div>
    <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
    </div>
    
  )
}

export default Email