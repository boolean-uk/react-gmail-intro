import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import backArrow from './assets/icons/back-arrow.png'
import rateStarButton from './assets/icons/rate-star-button.png'

function RespondMailComponent() {
  return (
    <section className="email-responder">
        <div className="avatar"></div>
        <div className="email-info">
            <div className="sender-info">
                <img
                    className="backArrowBtn"
                    src={backArrow}
                    alt="back arrow button"
                />
                <h2>Freepik Company</h2>
                <em>&lt;no-reply@freepik.com&gt;</em>
                <div className="user-info">
                <p className="responder"></p>
                <div className="date-info">
        </div>
        <div className="email-action-icons">
            <ul>
                <li>
                    <button className="SendBtn">
                        Send
                    </button>
                </li>
            
                <li>
                  <img className="icon" src={backArrow} alt="reply button" />
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
                <li>
                  <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                  />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                  />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
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
                <div className="email-action-icons">
            </div>
        </div>
        </div>
        </div>
        </div>
  </section>
  )
}

export default RespondMailComponent