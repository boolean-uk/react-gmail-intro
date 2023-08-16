import '../../styles/email_toolbar.css'

import ReplyButton from './ReplyButton'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import Pagination from './Pagination'
import ToolBarSpace from './ToolBarSpace'

function EmailToolBar() {
  return (
    <nav className="email-toolbar">
      <ul>
        <li>
          <ReplyButton />
        </li>
        <li>
          <ArchiveButton />
        </li>
        <li>
          <DeleteButton />
        </li>
      </ul>
      <ToolBarSpace />
      <Pagination />
    </nav>
  )
}

export default EmailToolBar