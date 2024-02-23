import './style.css'

import openInNewTab from '../../../assets/icons/open-in-new-tab.png'
import InputField from './InputField';


function TopField() {
    return (
        <>
            <div className="top-field">
                <InputField />
                <div className="right-side">
                    <img src={openInNewTab}></img>
                </div>
            </div>

        </>
    )
}

export default TopField;