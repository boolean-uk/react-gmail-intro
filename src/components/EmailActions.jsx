import { useState } from "react"
import EmailSend from "./EmailSend"

export default function EmailActions(){

    const [reply, setReply] = useState(false)

    return (
        <section className="email-actions">
        <button onClick={() => {setReply(true)}}>Reply</button>
        <button>Forward</button>
        {reply && <EmailSend />}
      </section>
    )
}