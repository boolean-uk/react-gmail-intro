import React from 'react'
import BackArrowIcon from '../BackArrowIcon'
import StarIcon from '../StarIcon'
import RubbishIcon from '../RubbishIcon'

function EmailActionIcons() {
  return (
    <>
        <div className="email-action-icons">
              <ul>
                <li>
                  <BackArrowIcon/>
                </li>
                <li>
                  <StarIcon/>
                </li>
                <li>
                  <RubbishIcon/>
                </li>
              </ul>
            </div>
    </>
  )
}

export default EmailActionIcons