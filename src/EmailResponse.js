import './styles/EmailResponse.css'

const EmailResponse = () => {
    return (
        <section className='response'>
            <div className="placeholder-icon"></div>
            <div className='response-box'>
                <div className='reply-info'>
                    
                    <p>Replying to</p>
                </div>
                <form className='response-body'>
                    <textarea rows='5'></textarea>
                    <div className='response-controls'>
                        <button type='sumbit'>Send</button>
                        <div className='placeholder-icon-small'></div>
                        <div className='placeholder-icon-small'></div>
                        <div className='placeholder-icon-small'></div>
                        <div className='placeholder-icon-small'></div>
                        <div className='placeholder-icon-small'></div>
                        <div className='placeholder-icon-small'></div>
                        <div className='placeholder-icon-small'></div>
                        <div className='placeholder-icon-small'></div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EmailResponse