import "../../../../styles/Email-content.css"
export default function EmailSend (){
    return (
    <>
    <section>
        <form className="emailForm"action="">
            <input className="email-text-box" type="textbox" />
            <button className="sendButton" type="submit">Send</button>
        </form>
    </section>
    </>
    )
}