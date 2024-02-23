import formatting from '../../../../../assets/icons/formatting.png'
import attatchments from '../../../../../assets/icons/attatchments.png'
import link from '../../../../../assets/icons/link.png'
import emoji from '../../../../../assets/icons/emoji.png'
import drive from '../../../../../assets/icons/drive.png'
import media from '../../../../../assets/icons/media.png'
import lock from '../../../../../assets/icons/lock.png'
import pen from '../../../../../assets/icons/pen.png'

import './style.css'

function ToolBar() {
    return (
        <div className="toolbar">
        <img src={formatting}/>
        <img src={attatchments}/>
        <img src={link}/>
        <img src={emoji}/>
        <img src={drive}/>
        <img src={media}/>
        <img src={lock}/>
        <img src={pen}/>
    </div>
    )
}

export default ToolBar;