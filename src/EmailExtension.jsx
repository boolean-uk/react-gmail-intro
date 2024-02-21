import backArrow from './assets/icons/back-arrow.png'
import './styles/EmailExtension.css'

function EmailExtension()
{
    return (
    <section className="email-writing">
        <div className='writer-info'>
        <img className="icon" src={backArrow} alt="reply button" />
         <h2> Annemoon@gmail.com</h2>

        </div>

    </section>
    )
}

export default EmailExtension
