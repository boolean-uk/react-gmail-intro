import Reply from './Reply/Reply';
import Star from './Star/Star';
import Delete from './Delete/Delete';

function MailActions() {
    return (
        <div className="email-action-icons">
            <ul>
                <li>
                    <Reply />
                </li>
                <li>
                    <Star />
                </li>
                <li>
                    <Delete />
                </li>
            </ul>
        </div>
    );
}

export default MailActions