import '../../styles/email_compose.css'

import userAvatar from '../../assets/icons/user-avatar.png'

function UserAvatar() {
  return (
    <img className="icon" src={userAvatar} alt="user avatar" />
  )
}

export default UserAvatar