import { useState } from 'react'
import PropTypes from 'prop-types'; // Required by boolean es lint for prop type validation
import backArrow from '@/assets/icons/back-arrow.png'
import Down from "@/assets/icons/NewIcons/triangle-bottom-arrow-icon.png"

const ComposeEmailHeader = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [recipient, setRecipient] = useState(props.name)
    // eslint-disable-next-line no-unused-vars
    const [recipientEmail, setRecipientEmail] = useState(props.email)

    return (
        <div className="compose-header"> 
            <img src={backArrow} alt="reply button" />
            <img style={{height: "5px"}}src={Down}></img>
            <span>{recipient} ({recipientEmail})</span>                  
        </div>
    )
}

ComposeEmailHeader.propTypes =  {
    name: PropTypes.string,
    email: PropTypes.string,
}

export default ComposeEmailHeader