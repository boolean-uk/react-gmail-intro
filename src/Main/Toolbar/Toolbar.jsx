import './style.css'

import UnorderedList from './UnorderedList'

function Toolbar() {
    return (
        <nav className="email-toolbar">
          <UnorderedList />
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
    )
}

export default Toolbar