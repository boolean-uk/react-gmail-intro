import reply from "../../assets/icons/reply.png";
import inNewWindow from "../../assets/icons/in-new-window.png";
import rubbishBinDeleteButton from "../../assets/icons/rubbish-bin-delete-button.png";

export default function Reply() {
  return (
    <main className="reply">
      <div className="reply_div">
        <div>
          <img src="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg" alt="avatar" className="reply_avatar"/>
        </div>
        <div className="reply_textbox">
          <header className="reply_header">
            <img src={reply} alt="avatar" className="reply_icon"/>
            <p className="reply_email">John Doe (JohnDoe@email.com)</p>
            <img src={inNewWindow} alt="avatar" className="reply_icon"/>
          </header>
          <div className="reply_body">
            <div className="reply_button">
              <p className="reply_button_text">Send</p>
            </div>
            <div className="reply_footer_icons">
              <img src="https://cdn4.iconfinder.com/data/icons/interface-essential-4/24/text-options-formatting-format-512.png" alt="formatting-icon" className="reply_icon_small"/>
              <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-attach-file_90371.png" alt="attach-icon" className="reply_icon_small"/>
              <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-insert-link_90461.png" alt="insert-icon" className="reply_icon_small"/>
              <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-insert-emoton_90224.png" alt="emoticon-icon" className="reply_icon_small"/>
              <img src="https://cdn.icon-icons.com/icons2/1/PNG/256/social_googledrive_google_46.png" alt="drive-icon" className="reply_icon_small"/>
              <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-insert-photo_90569.png" alt="photo-icon" className="reply_icon_small"/>
            </div>
            <div>
              <img src={rubbishBinDeleteButton} alt="delete-icon" className="reply_icon_small"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}