import './toolBar.css'

import LeftToolBar from "./LeftToolBar";
import MiddleToolBar from "./MiddleToolBar";
import RightToolBar from "./RightToolBar";

function ToolBar() {
    return (
        <nav className="email-toolbar">
            <LeftToolBar />     
            <MiddleToolBar />
            <RightToolBar />
        </nav>
    );
}

export default ToolBar