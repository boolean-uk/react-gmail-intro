import backArrow from 'assets/icons/back-arrow.png'
import dropDownArrow from 'assets/icons/downward-arrow.png'
import fontColor from 'assets/icons/color.png'
import attachFile from 'assets/icons/attach-file.png'
import link from 'assets/icons/link.png'
import dotsOptions from 'assets/icons/dots.png'

import './ComposeField.css'

const ComposeField = () => {
  return(
    <div className="compose-container">
      <div className='adress-bar'>
        <img src={backArrow} />
        <img src={dropDownArrow} />
        <p className='email-adress'>Boolean UK (hello@boolean.co.uk)</p>
      </div>
      <div className='toolbar'>
        <button >Send</button>
        <img src={fontColor} />
        <img src={attachFile} />
        <img src={link} />
      </div>
    </div>
  )
}

export default ComposeField
