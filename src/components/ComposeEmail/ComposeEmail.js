import ComposeField from 'components/ComposeField/ComposeField'
import Avatar from '../Avatar/Avatar'

import './ComposeEmail.css'

const ComposeEmail = () => {
  return(
    <div className="compose-email">
      <Avatar />
      <ComposeField />
    </div>
  )
}

export default ComposeEmail
