import '../styles/Reply.css'
import Button from '@mui/material/Button';

function SendButton() {
    return (
        <div className='reply-button'>
            <Button className="send-button" variant="contained">Send</Button>
        </div>
    )
}

export default SendButton;