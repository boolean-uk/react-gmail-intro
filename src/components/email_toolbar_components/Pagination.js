import '../../styles/email_toolbar.css'

import NextButton from './NextButton'
import PaginationText from './PaginationText'
import PrevButton from './PrevButton'

function Pagination() {
  return (
    <div>
      <PaginationText />
      <PrevButton />
      <NextButton />
    </div>
  )
}

export default Pagination