import ComposeEmailFooter from './ComposeEmailFooter/ComposeEmailFooter'
import ComposeEmailHeader from "./ComposeEmailHeader/ComposeEmailHeader"
import ComposeEmailText from "./ComposeEmailText/ComposeEmailText"
import "./ComposeEmail.css"

const ComposeEmail = () => {
    return (
        <div className="email-composer">
            <div className="compose-area">
                <ComposeEmailHeader/>
                <ComposeEmailText/>
                <ComposeEmailFooter/>
            </div>
        </div>
    )   
}

export default ComposeEmail