import TopField from './TopField'
import './style.css'

import avatar from '../../assets/images/hamtaro.png'
import BottomField from './BottomField'



function EmailCompose() {
    return(
        <>
        <div className="compose">
            <img className="avatar" src={avatar}></img>
            <div className="compose--field">
                <TopField />
                <BottomField />
            </div>
        </div>
        </>
    )
}

export default EmailCompose;