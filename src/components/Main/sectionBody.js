import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'
import '../../styles/sectionBody.css'

function SectionBody() {
    return <section className="email-body">
    <div className="content">
      <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
    </div>
  </section>
}
export default SectionBody