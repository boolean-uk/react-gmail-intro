import profileIcon from './assets/icon_for_email.png'
import customiseIcons from './assets/icons_for_answer.png'
import backArrow from "./assets/back-arrow.png";
import sendButton from "./assets/send-button.png";
import rubbish from "./assets/rubbish-button.png";

function WriteEmail() {
  return (
    <div className="write-email">
      <svg width="1400" height="350">
        <image
          href={backArrow}
          width="70"
          height="50"
          x="190"
          y="20"
          preserveAspectRatio="none"
        />
        <image
          href={profileIcon}
          width="50"
          height="50"
          x="120"
          y="20"
          preserveAspectRatio="none"
        />
        <rect
          width="1200"
          height="300"
          x="180"
          y="10"
          rx="20"
          ry="20"
          fill="transparent"
          stroke="grey"
        ></rect>
        <text x="270" y="50">
          Freepik Company (no-reply@freepik.com)
        </text>
        <foreignObject x="270" y="60" width="1070" height="168">
          <body>
            <textarea name="test" id="1" cols="115" rows="8"></textarea>
          </body>
        </foreignObject>
        <image
          href={customiseIcons}
          width="370"
          height="55"
          x="330"
          y="230"
          preserveAspectRatio="none"
        />
        <image
          href={sendButton}
          width="130"
          height="55"
          x="190"
          y="230"
          preserveAspectRatio="none"
        />
        <image
          href={rubbish}
          width="60"
          height="33"
          x="1300"
          y="240"
          preserveAspectRatio="none"
        />
      </svg>
    </div>
  );
}

export default WriteEmail;
