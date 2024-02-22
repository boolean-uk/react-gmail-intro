import './styles/EmailExtension.css'
import backArrow from './assets/icons/back-arrow.png'

function EmailExtension() {
  return (
    <section className="email-writing">
        <div className='writer-info'>
        <img className="icon" src={backArrow} alt="reply button" />
         <p>Freepik Company (Malimo326@gmail.com)</p>

        </div>

    </section>
  )
}

export default EmailExtension