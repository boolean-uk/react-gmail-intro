
function NewMessage() {
    return (
        <div className='extension'>
        <img src="../../../images/usericon.png" alt="user icon" />
        <textarea className="new-email-input"></textarea>
        <div className='bottom-panel'>
          <button>Send</button>
          <img className='littleIcons' src='../../../images/littleicons.png' alt='little icons'></img>
        </div>
      </div>
    )
}

export default NewMessage