import ButtonsLeft from "./ButtonsLeft";
import ButtonsRight from "./ButtonsRight";
import dotDotDot from '../../../assets/icons/dot-dot-dot.png'

import './style.css'

function BottomField() {

    return(
        <>
            <img src={dotDotDot} className="dot-dot-dot"></img>
            <div className="bottom-field">
                <ButtonsLeft />
                <ButtonsRight />
            </div>
        </>
    )

}

export default BottomField;