import '../styles/leftMenu.css'

import LeftMenuListComponent from './leftMenuComponents/LeftMenuListComponent'

function LeftMenu() {
    return (
      <nav className="left-menu">
        <LeftMenuListComponent />
      </nav>
    )
}

export default LeftMenu