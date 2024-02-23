import downArrow from '../assets/icons/down-arrow.png'
import backArrow from '../assets/icons/back-arrow.png'

export default function Message(){
    return (
        <>
        <div className="message-container">           
            <div className="message-header">
                <img src={backArrow} style={{width: '14px', cursor: 'pointer'}}/> 
                <img src={downArrow} style={{width:'12.5px', cursor: 'pointer'}} />
                <input className='message-textbox-default message-recipient' type='text' placeholder='Send to, example: mail@hotmail.com'/>
            </div>
            <div className='message-textbox-container'>
                <textarea className='message-textbox-default message-textbox' placeholder='Type something...' />
            </div>         
            <div className='message-button-container'>            
                <button className='message-send-button'>Send</button>
            </div>  
        </div>             
        </>
    )
}
