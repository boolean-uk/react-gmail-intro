import "../../styles/email.css";

import emailButtons from "../../assets/icons/emailButtons.png";
import emailImg from "../../assets/icons/emailImg.png";
import emailRightImage from "../../assets/icons/emailRightImg.png";

function Email() {
  return (
    <div className="email-write">
      <div className="header">
        <img src={emailImg} alt="user photo" className="user-photo" />
        <span className="sender">
          Freepik Company&lt;no-reply@freepik.com&gt;
        </span>
        <img src={emailRightImage} alt="small icon" className="small-icon" />
      </div>
      <textarea
        className="email-text"
        placeholder="Write your email..."
      ></textarea>
      <div className="actions">
        <button className="send-button">
          Send <i className="arrow"></i>
        </button>
        <img
          src={emailButtons}
          alt="additional image"
          className="additional-image"
        />
      </div>
    </div>
  );
}

export default Email;
