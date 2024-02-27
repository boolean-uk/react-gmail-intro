import IconComponent from './email_toolbar/Icon'

function email_toolbar() {
  return (
        <nav className="email-toolbar">
          <ul>
            <IconComponent source={'src/assets/icons/back-arrow.png'} alt={"reply button"}/>
            <IconComponent source={'src/assets/icons/download-button.png'} alt={"archive button"}/>
            <IconComponent source={'src/assets/icons/rubbish-bin-delete-button.png'} alt={"delete button"}/>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
  )
}

export default email_toolbar