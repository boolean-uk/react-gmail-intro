import '../../styles/email_toolbar.css'

import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'

function DeleteButton() {
  return <img className="icon" src={rubbishButton} alt="delete button" />
}

export default DeleteButton