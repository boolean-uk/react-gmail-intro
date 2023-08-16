import './actions.css'

import ReplyTop from './ReplySection/ReplyTop'
import ReplyMiddle from './ReplySection/ReplyMiddle';
import ReplyBottom from './ReplySection/ReplyBottom';

function Actions() {
    return (
        <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
            <ReplyTop />
            <ReplyMiddle />
            <ReplyBottom />
        </section>
    );
}

export default Actions