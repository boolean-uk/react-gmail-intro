import backArrow from '../../../../../assets/icons/back-arrow.png'
import rateStar from '../../../../../assets/icons/rate-star-button.png'

function ReplyTop() {
    return (
        <div className='reply-bar'>
            <div className="reply-avatar"></div>
            <img className='reply-icon'
                src={backArrow}
                alt="reply button" 
            />
            <p>Freepik Company (no-reply@freepik.com)</p>
            <img className='reply-icon-2'
                src={rateStar}
                alt="rate button" 
            />
        </div>
    );
}

export default ReplyTop