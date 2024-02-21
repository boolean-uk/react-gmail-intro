import "./EmailCompose.css";
import profileCircle from "../assets/icons/profile-circle.svg";
import backArrow from "../assets/icons/back-arrow.png";
import rubbishButton from "../assets/icons/rubbish-bin-delete-button.png";
export default function EmailCompose() {
  const imgSize = 80;
  const iconSize = 48;
  return (
    <div className="flex">
      <div>
        <img
          className="icon picture"
          width={imgSize}
          height={imgSize}
          src={profileCircle}
          alt="reply button"
        />
      </div>
      <div className="BoundingBox Typing">
        <div className="Inside">
          <div className="row Top-Row">
            <img className="icon" src={backArrow} alt="reply button" />
          </div>
          <div className="row Email-Field">Some Text for email</div>
          <div className="row Bottom-Row">
            <div>
              <button className="button">Send mail</button>
            </div>
            <div className="flex-center">
              <img className="icon" src={rubbishButton} alt="reply button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
