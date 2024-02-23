import ToolBar from './ToolBar';
import SendButtons from './SendButtons'
import './style.css'

function ButtonsLeft() {
    return (
        <div className="buttons-left">
            <SendButtons />
            <ToolBar />
        </div>
    )
}

export default ButtonsLeft;