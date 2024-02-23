import backArrow from '../assets/icons/back-arrow.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'
import rateStarButton from '../assets/icons/rate-star-button.png'
function WriteEmail(){
    return(
        <section className="email-input">
            <div className="text-div">
                <header className="email-header">
                    <div  className="email-reciever">
                        <img className="icon" src={backArrow} alt="Email reciever" />
                        <input className="reciever-text" type="text" placeholder="To:    Example Name (Example@email.com)"></input>
                    </div>
                </header>
                <div  className="user-input">
                        <textarea className="user-text" rows="4" cols="50" placeholder="Write email here"></textarea>
                </div>
                <div className="footer-div">
                    <button className="sendBtn">Send</button>
                    <img
                    className="rate"
                    src={rateStarButton}
                    alt="rate"
                  />
                  <img
                    className="rate2"
                    src={rateStarButton}
                    alt="rate2"
                  />
                  <img
                    className="rate3"
                    src={rateStarButton}
                    alt="rate3"
                  />
                    <img
                    className="rubbish"
                    src={rubbishButton}
                    alt="delete button"
                  />
                </div>
            </div>
          </section>
    )
}
export default WriteEmail