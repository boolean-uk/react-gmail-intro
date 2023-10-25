import './../styles/WriteEmail.css'
import './../styles/EmailContentHeader.css'

//bare-bones draft including some (but not all) elements
function WriteEmail() {
    return(
        <>
            <section className="new-email-container">
                <div className="display-profile-pic">
                    <div className="profile-pic-container avatar">
                        <img src="" alt="profile-pic"></img>
                    </div>
                </div>
                <textarea className="new-email">
                </textarea>            
                    <div className="new-email-menu">
                        <button className="send-button">Send</button>
                        {/* let\'s just pretend the icons are svgs */}
                        <div 
                        className="icon">i</div>
                        <div className="icon">i</div>
                        <div className="icon">i</div>
                        <div className="icon">i</div>
                        <div className="icon">i</div>
                        <div className="icon">i</div>
                        <div className="icon">i</div>
                        <div className="icon">i</div>
                    </div>
                    <div className="icon"></div>
                    <div className="icon"></div>
            </section>
        </>
    )


}


export default WriteEmail