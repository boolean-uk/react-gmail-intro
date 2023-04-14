import '../../styles/EmailWrite.css'
import unknown from '../../assets/images/unknown.webp'
import reply_arrow from '../../assets/images/reply_arrow.png'
import { ChevronDownIcon, PaperClipIcon, PhotoIcon } from '@heroicons/react/20/solid'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
const EmailWrite = () => {
    return (
        <form className="email-write-row">
            <img className='avatar' src={unknown}></img>
            <article className='email-write-content'>
                <div className='write-header'>
                    <img className='reply-icon' src={reply_arrow}></img>
                    <ChevronDownIcon className='icon' color='gray' />
                    <div className='to-container'>
                        <h3 className='header-to'>Freepik Company (no-reply@freepik.com)</h3>
                    </div>
                </div>
                <textarea className='content-input'></textarea>
                <div className='dots'>···
                </div>
                <div className='write-actions'>
                    <button className='send-button' type='submit'>
                        <div className='send-button-a'>
                            <h3>Send</h3>
                        </div>
                        <div className='send-button-b'>
                            <ChevronDownIcon className='icon' color='white' />
                        </div>
                    </button>
                    <PaperClipIcon className='icon' color='gray' />
                    <PhotoIcon className='icon' color='gray' />
                    <FaceSmileIcon className='icon' color='gray' />
                </div>
            </article>
        </form>
    )
}

export default EmailWrite
