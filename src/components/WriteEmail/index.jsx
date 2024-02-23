import Profile from './components/Profile'
import MainContent from './components/MainContent'

import './styles.css'

function WriteEmail() {
    return (
        <div className="email-write">
          <Profile/>
          <MainContent/>
        </div>
    )
}

export default WriteEmail