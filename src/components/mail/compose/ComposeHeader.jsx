import response from '../../../assets/icons/respond.png'
import link from '../../../assets/icons/link.png'


export default function ComposeHeader() {
  return (
    <div className="action-buttons">
      <img className="respond-icon" src={response} alt="reply button" />
      <div className="header">
        <div className="recipient">Freepik Company (no-reply@freepik.com)</div>
      </div>
      <img className="link-icon" src={link} />
    </div>
  )
}