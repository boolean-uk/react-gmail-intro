import './styles.css'

import actions from '@/assets/writeemail/actions.png'
import dandd from '@/assets/writeemail/deleteanddots.png'

function Actions() {
    return (
        <div className="writing-box-actions">
              <button className="send-button">Send</button>
              <select className='select-send-button'></select>
              <img className="actions" src={actions} alt="actions" />
              <img className="dand" src={dandd} alt="delete and dots" />
            </div>
    )
}

export default Actions