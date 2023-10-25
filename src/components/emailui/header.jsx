import Emailicon from './components/Emailicon.jsx'
import WriteEmail from './components/WriteEmail.jsx'
import './../../../../../styles/Emailheader.css'


function Emailheader() {
    return(
        <>        
            <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
            <div className="sender-info">
                <h2>Job offer</h2>
                <em>&lt;no-reply@loza.org&gt;</em>
            </div>
            <div className="user-info">
                <p>
                to loza <em>&lt;lozatmamo@gmail.com&gt;</em>
                </p>
            </div>
            </div>
            <div className="date-info">
            <p>oct 25 wed, 20:36</p>
            </div>
            <Emailicon></Emailicon>
            </header>
            <WriteEmail></WriteEmail>
        </>
    )
}


export default Emailheader