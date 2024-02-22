import React, { useState } from 'react';
import '../styles/Reply.css'
const Reply = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>  
            {!isActive &&
            <button onClick={() => setIsActive(!isActive)}>Reply</button> 
            }
            {isActive && 
            <div className='reply'>
                <p>Freepik Company(no-reply@freepik.com)</p>
                <textarea className='reply-field'></textarea>
                <div className='reply-footer'>
                    <button type='button' onClick={() => setIsActive(!isActive)}>Send</button>
                </div>
            </div>
            }
        </>
    );
}

export default Reply;
