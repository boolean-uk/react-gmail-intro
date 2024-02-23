import './styles/MailInputField.css'

import backArrow from './assets/icons/back-arrow.png'

function MailInputField() {
    return (
        <div className='root'>
            <div className='header'>
                <img src={backArrow} alt="Back Arrow" />
                <p>Freepik Company (no-reply@freepik.com)</p>
            </div>
            <textarea>

            </textarea>
            <div className='footer'>
                <button>Send</button>
            </div>
        </div>
    )
}

export default MailInputField
