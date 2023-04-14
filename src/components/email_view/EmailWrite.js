import '../../styles/EmailWrite.css'
import unknown from '../../assets/images/unknown.webp'
import reply_arrow from '../../assets/images/reply_arrow.png'
import { ArrowUpOnSquareIcon, ChevronDownIcon, EllipsisVerticalIcon, PaperClipIcon, PhotoIcon, TrashIcon } from '@heroicons/react/20/solid'
import { ArrowRightOnRectangleIcon, ArrowTopRightOnSquareIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
const EmailWrite = () => {
    return (
        <form className="email-write-row">
            <img className='avatar' src={unknown}></img>
            <article className='email-write-content'>
                <div className='write-header'>
                    <span className='left-side'>
                        <img className='reply-icon' src={reply_arrow}></img>
                        <ChevronDownIcon className='icon' color='gray' />
                        <div className='to-container'>
                            <h3 className='header-to'>Freepik Company (no-reply@freepik.com)</h3>
                        </div>
                    </span>
                    <span className='right-side'>
                        <ArrowTopRightOnSquareIcon className='icon' color='gray' />
                    </span>

                </div>
                <textarea className='content-input'></textarea>
                <div className='dots'>···
                </div>
                <div className='write-actions'>
                    <span className='left-side'>
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
                    </span>
                    <span className='right-side'>
                        <EllipsisVerticalIcon className='icon' color='gray' />
                        <TrashIcon className='icon' color='gray' />
                    </span>

                </div>
            </article>
        </form>
    )
}

export default EmailWrite
