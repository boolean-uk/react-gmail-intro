import buttons from '../../../assets/icons/buttons.png'
import buttons2 from '../../../assets/icons/buttons2.png'

export default function ActionBar() {
  return (
    <div className="action-bar">
      <div className="action-buttons">
        <button className="send-button">Send</button>
        <button className="down-button">▼</button>
      </div>
      <img className="other-icon" src={buttons} />
      <img className='trash-icon' src={buttons2} />
    </div>
  )
}