import SenderEmail from "./SenderEmail";
import SenderHeader from "./SenderHeader";

function SenderInfoDiv() {
    return (
        <div className="sender-info">
            <SenderHeader />
            <SenderEmail />
        </div>
    );
}

export default SenderInfoDiv;
