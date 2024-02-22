import "../styles/mail/Reply.css";

const Reply = () => {
    return (
        <div className="reply-box">
            <p>{"replying to <no-reply@freepik.com>"}</p>
            <textarea className="reply-textbox" />
            <button className="btn-reply">Send</button>
        </div>
    );
};

export default Reply;
