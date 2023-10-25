import backArrow from "../../assets/icons/back-arrow.png";

function EmailReply() {
  const img8 = "https://img.icons8.com/";
  const color = img8 + "material-outlined/24/text-color.png";
  const attach = img8 + "attach";
  const link = img8 + "link";
  const emoji = img8 + "happy";
  const drive = img8 + "ios/50/google-drive--v1.png";
  const image = img8 + "image";
  const lock = img8 + "lock";
  const pen = img8 + "pen";
  const more = img8 + "more";
  const bin = img8 + "trash";

  return (
    <article className="email-reply">
      <div className="avatar"></div>
      <div className="addressee">
        <ul>
          <li>
            <img src={backArrow} alt="reply button" />
          </li>
          <li>&#9207;</li>
          <li>Freepik Company (no-reply@freepik.com)</li>
          <li>
            <img
              src="https://img.icons8.com/material-outlined/24/external-link.png"
              alt="external link"
            />
          </li>
        </ul>
      </div>
      <section className="reply-body">Here is my well put email.</section>
      <footer>
        <div className="show-replies"></div>
        <div className="footer-toolbar">
          <ul>
            <li>
              <button>Send</button>
              <button>&#9207;</button>
            </li>
            <li>
              <img src={color} alt="font color" />
            </li>
            <li>
              <img src={attach} alt="attach" />
            </li>
            <li>
              <img src={link} alt="" />
            </li>
            <li>
              <img src={emoji} alt="" />
            </li>
            <li>
              <img src={drive} alt="" />
            </li>
            <li>
              <img src={image} alt="" />
            </li>
            <li>
              <img src={lock} alt="" />
            </li>
            <li>
              <img src={pen} alt="" />
            </li>
            <li>
              <img src={more} alt="" />
            </li>
            <li>
              <img src={bin} alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </article>
  );
}

export default EmailReply;
