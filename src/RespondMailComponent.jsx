import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function RespondMailComponent() {
  return (
    <section className="email-responder">
        <div className="avatar"></div>
        <div className="email-info">
            <div className="sender-info">
                <h2>Freepik Company</h2>
                <em>&lt;no-reply@freepik.com&gt;</em>
                <div className="user-info">
                <p className="responder"></p>
                <div className="date-info">
        </div>
        <div className="email-action-icons">
            <ul>
                <li>
                    <button className="SendBtn">
                        Send
                    </button>
                </li>
                <li>
                    <button>
                        
                    </button>
                </li>
                <li>
                    <button>
                        
                    </button>
                </li>
                <li>
                    <button>
                        
                    </button>
                </li>
                <li>
                    <button>
                        
                    </button>
                </li>
                <li>
                    <button>
                        
                    </button>
                </li>
                <li>
                    <button>
                        
                    </button>
                </li>
                <li>
                <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                />
                </li>
            </ul>
        </div>
        </div>
        </div>
        </div>
  </section>
  )
}

export default RespondMailComponent