import { useState } from 'react'
import "./ComposeEmailHeader.css"
import backArrow from '@/assets/icons/back-arrow.png'
import Down from "@/assets/icons/NewIcons/triangle-bottom-arrow-icon.png"

const ComposeEmailHeader = () => {
    const [showSpan, setShowSpan] = useState(true)
    // eslint-disable-next-line no-unused-vars
    const [recipient, setRecipient] = useState("Freepik")
    // eslint-disable-next-line no-unused-vars
    const [recipientEmail, setRecipientEmail] = useState("no-replay@freepik.com")

    const toggleSpan = () => {
        if (showSpan) {
            setShowSpan(false)
        } else {
            setShowSpan(true)
        }
    }

    const submitEmail = (e) => {
        if (e.key === "Enter") {
            const targetEmail = e.target.value
            setRecipientEmail(targetEmail)
            let recipientName = targetEmail.substring(0, targetEmail.indexOf("@"))
            recipientName = recipientName.substring(0,1).toUpperCase() + recipientName.slice(1)
            setRecipient(recipientName)
            setShowSpan(true)
        }
    }

    return (
        <div className="compose-header"> 
            <img src={backArrow} alt="reply button" />
            <img style={{height: "5px"}}src={Down}></img>
            {showSpan ? 
                <span onClick={() => toggleSpan()}>{recipient} ({recipientEmail})</span> : 
                <input placeholder="value" onKeyDown={(e) => submitEmail(e)}/>
            }       
        </div>
    )
}

export default ComposeEmailHeader