import '../../styles/extension.css'
import profile from '../../assets/icons/person-circle-outline.png'
import backArrow from '../../assets/icons/back-arrow.png'

function EmailForm() {
    return <div className="centered-box-container">
        <img className='imageProf' src={profile} alt='profile'/>
        <div className='box'>
            <div className='inside-content'>
                <img className='' src={backArrow} alt='backArrow'/>
                <p><u className='u'>Freepik Company (no-reply@freepik.com)</u></p>
            </div>
        </div>
    </div>
}
export default EmailForm