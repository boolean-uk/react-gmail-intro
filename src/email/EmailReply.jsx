import './email.css'
export function EmailReply(){
    return(
        <div>
            <p>Hi Welcome :D</p>
                <div className="email">
                    <div className="emailSidebar">
                        <a href="#inbox">Inbox</a>
                        <a href="#sent">Sent</a>
                        <a href="#drafts">Drafts</a>
                    </div>
                    <div className="main-content">
                    <div className="emailHeader">
                        <h1>Email Application</h1>
                    </div>
                    <div className='eamilWriteBox'>
                        <input className="emailWrite" placeholder="Write..." />
                    </div>
                    <div className="emailFooter">
                        <p>Footer Content</p>
                    </div>
            </div>
               
            </div>
        </div>
    )
}