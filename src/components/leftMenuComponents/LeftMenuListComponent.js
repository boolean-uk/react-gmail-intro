import '../../styles/leftMenu.css'
import LeftMenuInboxComponent from './LeftMenuInboxComponent'
import LeftMenuItemComponent from './LeftMenuItemComponent'
import LeftMenuItemToggleComponent from './LeftMenuItemToggleComponent'

function LeftMenuListComponent() {
    return (
        <ul className="inbox-list">
          
          <LeftMenuInboxComponent />

          <LeftMenuItemComponent />

          <LeftMenuItemToggleComponent />

        </ul>
    )
}

export default LeftMenuListComponent