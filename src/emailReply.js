import './styles/emailReply.css'

const EmailReply = () => {
    return(
        <header className="email-content--reply">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="user-info">
                <p>Freepik Company (no-reply@freepik.com)</p>
                <textarea id="replyInput" name="replyInput" rows="8"></textarea>
              </div>
              <div className="user-info">
              <button type="button" id='other'></button>
              <button type="button" id='other'></button>
              <button type="button" id='other'></button>
              <button type="button" id='other'></button>
              <button type="button" id='other'></button>
              <button type="button" id='other'></button>
              </div>
            </div>
        </header>
    )
}

export default EmailReply;