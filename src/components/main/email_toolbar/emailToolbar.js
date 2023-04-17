import downloadButton from 'assets/icons/download-button.png'
import backArrow from 'assets/icons/back-arrow.png'
import rubbishButton from 'assets/icons/rubbish-bin-delete-button.png'

import './emailToolbar.css'

import ImageLi from 'components/imageLi'

function EmailToolbar() {
    return (
        <nav className="email-toolbar">
            <ul>
                <ImageLi className={'icon'} src={backArrow} alt={'reply button'} />
                <ImageLi className={'icon'} src={downloadButton} alt={'archive button'} />
                <ImageLi className={'icon'} src={rubbishButton} alt={'delete button'} />
            </ul>

            <div className="space"></div>
            
            <div>
                <p>1 of 25</p>
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </nav>
    )
}

export default EmailToolbar