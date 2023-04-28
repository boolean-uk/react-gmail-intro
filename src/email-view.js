import downloadButton from "./assets/icons/download-button.png"
import backArrow from "./assets/icons/back-arrow.png"
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png"
import "./styles/emailbar.css"

function Email_View () {
    return (
        <nav className="email-toolbar">
            <ul>
                <li>
                    <img className="icon" src={backArrow} alt="reply button" />
                </li>
                <li>
                    <img className="icon" src={downloadButton} alt="archive button" />
                </li>
                <li>
                <li className="icon" src={rubbishButton} alt="delete button" />
                </li>

            </ul>
            <div className="space">
                <div>
                    <p>1 of 25</p>
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </div>
        </nav>
    )
}
export default Email_View