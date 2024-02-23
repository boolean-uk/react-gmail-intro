import backArrow from '../assets/icons/back-arrow-png'
import rateStartButton from '../assets/icons/rate-star-button.png'
import rubishButton from '../assets/icons/rubbish-bin-delete-button.png'
import '../styles/EmailHeader.css'

export default function EmailHeader() {
    return (
        <header className="email-space--header">
            <div className="profile"></div>
            <div className="email-info">
                <div className="sender">
                    <h2>Nike</h2>
                    <em>&lt;nike@gmail.com&gt;</em>
                </div>
                <div className="user-info">
                    <p>
                        to me <em>&lt;alexander@gmail.com&gt;</em>
                    </p>
                </div>
            </div>
            <div className="date">
                <p>22 February 2024, 13:29</p>
            </div>
            <div className="email-action-icons">
                <ul>
                    <li>
                        <img className="icon" src={backArrow} alt="reply button"/>
                    </li>
                    <li>
                        <img className="icon" src={rateStartButton} alt="star button"/>
                    </li>
                    <li>
                        <img className="icon" src={rubishButton} alt="delete button"/>
                    </li>
                </ul>
            </div>
        </header>
    )
}