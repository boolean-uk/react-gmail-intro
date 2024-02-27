import SenderInfoComponent from './SenderInfo'
import UserInfoComponent from './UserInfo'
import EmailDateInfoComponent from './EmailDateInfo'
import IconComponent from '../../body/email_toolbar/Icon'

import backArrow from '../../../assets/icons/rate-star-button.png'
import rateStarButton from '../../../assets/icons/rate-star-button.png'
import rubbishButton from '../../../assets/icons/rubbish-bin-delete-button.png'

function EmailContentHeaderComponent() {
  return (
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <SenderInfoComponent sender="Freepik Company" email="no-reply@freepik.com"/>
              <UserInfoComponent email="nicolas@bolean.co.uk"/>
            </div>
            <EmailDateInfoComponent/>
            <div className="email-action-icons">
              <ul>
                <IconComponent source={backArrow} alt="reply button"/>
                <IconComponent source={rateStarButton} alt="star button"/>
                <IconComponent source={rubbishButton} alt="delete button"/>
              </ul>
            </div>
          </header>
  )
}

export default EmailContentHeaderComponent