import '/src/styles/actions.css'

import backArrow from "/src/assets/icons/back-arrow.png";
import placeholder from "/src/assets/icons/rate-star-button.png";

export const Actions = () => {
    return (
      <>
        <section className="email-actions">
          <button>Reply</button>
          <button>Forward</button>
        </section>
        <div className="reply-box">
          <div className="line">
            <img className="icon" src={backArrow} alt="reply button" />
            <img className="icon" src={placeholder} />
            <p>Freepik Company (no-reply@freepik.com)</p>
            
            <img className="icon right" src={placeholder} />
          </div>

          <textarea className="reply-textarea" />

          <img className="icon" src={placeholder} />
        
          <div className="vertical-spacer"></div>

          <div className="line">
            <button className="send-btn">Send</button>
            <img className="icon" src={placeholder} />
            <img className="icon" src={placeholder} />
            <img className="icon" src={placeholder} />
            <img className="icon" src={placeholder} />
            <img className="icon" src={placeholder} />
            <img className="icon" src={placeholder} />
            <img className="icon" src={placeholder} />

            <img className="icon right" src={placeholder} />
            <img className="icon" src={placeholder} />
          </div>
        </div>
      </>
    );
}