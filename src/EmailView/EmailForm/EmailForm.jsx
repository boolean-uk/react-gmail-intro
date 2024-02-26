function EmailForm() {
    return (
        <div>
            <div>
                <input type="text" placeholder="To" className="to-field"/>
            </div>
            <div>
                <textarea placeholder="Message" rows="4" cols="50" className="message-field"/>
            </div>
            <div className="email-form">
                <button className="send-button">Send</button>
                <i className="material-icons form-icon">attach_file</i>
                <i className="material-icons form-icon">insert_link</i>
                <i className="material-icons form-icon">insert_drive_file</i>
                <i className="material-icons form-icon">insert_photo</i>
                <i className="material-icons form-icon">edit</i>
                <i className="material-icons form-icon">more_vert</i>
            </div>
        </div>
    );
}

export default EmailForm