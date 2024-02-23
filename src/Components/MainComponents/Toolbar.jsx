import React from 'react'

function Toolbar() {
  return (
    <>
        <nav className="email-toolbar">
          <ul>
            <li>
            <img className="icon" src="src/assets/icons/back-arrow.png" alt="reply button" />
            </li>
            <li>
              <img className="icon" src="src/assets/icons/download-button.png" alt="archive button" />
            </li>
            <li>
              <img className="icon" src="src/assets/icons/rubbish-bin-delete-button.png" alt="delete button"/>
            </li>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
    </>
  )
}

export default Toolbar