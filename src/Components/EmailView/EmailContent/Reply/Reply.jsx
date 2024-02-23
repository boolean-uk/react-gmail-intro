import backArrow from '../../../../assets/icons/back-arrow.png'
import rateStarButton from '../../../../assets/icons/rate-star-button.png'
import rubbishButton from '../../../../assets/icons/rubbish-bin-delete-button.png'
import './Reply.css'

function Reply() {
  return (
    <section className="email-response">
      <div className="avatar"></div>
      <form className="response"> 
        <div className="email-info">
          <img className="icon" src={backArrow} alt="reply button"/>
          <p className="respondee">Freepik Company (<em>no-reply@freepik.com</em>)</p>
        </div>
        <input type="text" className="email-input"></input>
      <div className="email-action-icons">
        <ul>
          <li>
            <button className="send-button">Send</button>
          </li>
          <li>
            <img
              className="icon"
              src={rateStarButton}
              alt="star button"
            />
          </li>
          <li>
            <img
              className="icon"
              src={rubbishButton}
              alt="delete button"
            />
          </li>
        </ul>
      </div>
      </form>
    </section>
  )
}

export default Reply
