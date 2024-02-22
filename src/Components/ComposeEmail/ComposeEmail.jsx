import ComposeEmailFooter from './ComposeEmailFooter/ComposeEmailFooter'
import ComposeEmailHeader from "./ComposeEmailHeader/ComposeEmailHeader"
import "./ComposeEmail.css"

const ComposeEmail = () => {
    return (
        <div className="email-composer">
            <div className="compose-area">
                <ComposeEmailHeader name="Freepik Company" email="no-reply@freepik.com"/>
                <ComposeEmailFooter/>
            </div>
        </div>
    )   
}

export default ComposeEmail