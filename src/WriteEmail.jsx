
export default function WriteEmail() {
    return(
        <div className="write-email">
            <div className="compose-header">
                <h2>New Message</h2>
            </div>
            <form>
                <input type="text" placeholder="To" />
                <input type="text" placeholder="Subject" />
                <textarea></textarea>
                <button>Send</button>
            </form>
        </div>
    )
}