import React from 'react'
import BackArrow from '../Icons/BackArrow'
import RubbishIcon from '../Icons/RubbishIcon'
import DownloadIcon from '../Icons/DownloadIcon'

function ToolbarIcons() {
  return (
    <>
        <ul>
            <li>
              <BackArrow/>
            </li>
            <li>
              <DownloadIcon/>
            </li>
            <li>
              <RubbishIcon/>
            </li>
        </ul>
    </>
  )
}

export default ToolbarIcons