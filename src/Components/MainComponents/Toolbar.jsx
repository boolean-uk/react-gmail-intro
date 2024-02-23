import React from 'react'
import ToolbarIcons from './ToolbarIcons'

function Toolbar() {
  return (
    <>
        <nav className="email-toolbar">
            <ToolbarIcons/>
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