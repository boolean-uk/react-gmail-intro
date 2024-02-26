import flaticonWelcomeImage from '.././assets/images/flaticon-welcome-image.png'
import backArrow from '.././assets/icons/back-arrow.png'
import downloadButton from '.././assets/icons/download-button.png'
import rateStarButton from '.././assets/icons/rate-star-button.png'
import rubbishButton from '.././assets/icons/rubbish-bin-delete-button.png'

export function MenuIcon() {
    return (
        <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
    )
}

export function GmailLogo() {
    return (
        <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
        />
    )
}

export function ReplyButtonImage() {
    return (
        <li >
            <img className="icon" src={backArrow} alt="reply button" />
        </li >
    )
}

export function ArchiveButtonImage() {
    return (
        <li >
            <img className="icon" src={downloadButton} alt="archive button" />
        </li>
    )
}

export function DeleteButtonImage() {
    return (
        <li>
            <img className="icon" src={rubbishButton} alt="delete button" />
        </li>
    )
}

export function StarButtonImage() {
    return (
        <li>
            <img
                className="icon"
                src={rateStarButton}
                alt="star button"
            />
        </li>
    )
}

export function FlaticonWelcomeImage() {
    return (
        <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
    )
}