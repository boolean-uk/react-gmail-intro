//import './emailHeader.css'

function EmailHeaderButton() {
    return <div className="email-action-icons">
            <ul>
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
            </ul>
          </div>
    }

    export default EmailHeaderButton