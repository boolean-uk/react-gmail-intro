import dots from '@/assets/writeemail/dots.png'
import Header from './components/Header'
import Actions from './components/Actions'
import TextArea from './components/TextArea'

import './styles.css'

function MainContent() {
    return (
        <div className="writing-box">
            <Header/>
            <TextArea/>
            <img className="writing-box-options" src={dots}></img>
            <Actions/>
      </div>
    )
}

export default MainContent