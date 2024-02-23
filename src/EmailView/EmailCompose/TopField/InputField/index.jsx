import './style.css'
import reply from '../../../../assets/icons/reply-arrow.png'

function InputField() {
    return (
        <div className="left-side">
            <img className="reply-arrow" src={reply}></img>
            <input className="compose--input-field" type="text" placeholder='Freepik Company (no-reply@freepik.com)'></input>
        </div>
    )
}

export default InputField;