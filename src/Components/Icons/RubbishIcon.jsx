import React from 'react'
import rubbishButton from 'src/assets/icons/rubbish-bin-delete-button.png'


function RubbishIcon() {
  return (
    <>
        <img
            className="icon"
            src={rubbishButton}
            alt="delete button"
        />
    </>
  )
}

export default RubbishIcon