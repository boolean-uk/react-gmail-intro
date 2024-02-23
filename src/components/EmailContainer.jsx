import EmailView from "./email-view/EmailView";
import Header from "./header/Header";
import SideNav from "./side-nav/SideNav";
import '../styles/App.css'
import WriteEmail from "./write-email/WriteEmail";
export default function EmailContainer() {
    return (
    <>  
    <div className="app">
        <Header />
        <SideNav />
        <EmailView />
        
    </div>
    <div className="additional-content">
        <WriteEmail />
    </div>
        
    </>
    )
}