import React from 'react'
import BackArrow from '../Icons/BackArrow'
import RateStar from '../Icons/RateStar'
import RubbishIcon from '../Icons/RubbishIcon'

function EmailActionIcons() {
  return (
    <>
        <ul>
            <li>
                <BackArrow/>
            </li>
            <li>
                <RateStar/>
            </li>
            <li>
                <RubbishIcon/>
            </li>
        </ul>
    </>
  )
}

export default EmailActionIcons