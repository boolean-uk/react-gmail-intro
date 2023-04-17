import "../styles/reply.css";

import flaticonWelcomeImage from "../assets/images/flaticon-welcome-image.png";
import backArrow from "../assets/icons/back-arrow.png";
import downloadButton from "../assets/icons/download-button.png";
import rateStarButton from "../assets/icons/rate-star-button.png";
import rubbishButton from "../assets/icons/rubbish-bin-delete-button.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa0,
  fa1,
  faA,
  faCaretDown,
  faClock,
  faCoffee,
  faEllipsis,
  faHardDrive,
  faImage,
  faImagePortrait,
  faLineChart,
  faLink,
  faPaperclip,
  faPencil,
  faReply,
  faSmile,
  faTrash,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function Reply({ handleReplyButton }) {
  return (
    <div className="reply-view">
      <header className="reply-content--header">
        <div className="avatar"></div>
      </header>
      <div className="reply-content">
        <div className="header">
          <div className="icon-content">
            <FontAwesomeIcon className="icon" icon={faReply} />
            <FontAwesomeIcon className="icon" icon={faCaretDown} />
          </div>

          <div className="info">
            <em>Freepik Company(no-reply@freepik.com)</em>
          </div>
          <FontAwesomeIcon
            className="icon"
            icon={faUpRightFromSquare}
            size="xs"
          />
        </div>
        <textarea className="body" name="" id="" cols="30" rows="5"></textarea>
        <div className="actions">
          <button className="send" onClick={() => handleReplyButton()}>
            Send
            <FontAwesomeIcon className="icon" icon={faCaretDown} />
          </button>
          <div className="icons">
            <div className="start">
              <FontAwesomeIcon className="icon" icon={faA} />
              <FontAwesomeIcon className="icon" icon={faPaperclip} />
              <FontAwesomeIcon className="icon" icon={faLink} />
              <FontAwesomeIcon className="icon" icon={faSmile} />
              <FontAwesomeIcon className="icon" icon={faHardDrive} />
              <FontAwesomeIcon className="icon" icon={faImage} />
              <FontAwesomeIcon className="icon" icon={faClock} />
              <FontAwesomeIcon className="icon" icon={faPencil} />
            </div>
            <div className="space"></div>
            <div className="end">
              <FontAwesomeIcon
                className="icon"
                icon={faEllipsis}
                rotation={90}
              />
              <FontAwesomeIcon className="icon" icon={faTrash} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reply;
