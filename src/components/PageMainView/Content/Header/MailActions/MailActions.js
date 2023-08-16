import './mailActions.css'

import Reply from './Reply';
import Star from './Star';
import Delete from './Delete';

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