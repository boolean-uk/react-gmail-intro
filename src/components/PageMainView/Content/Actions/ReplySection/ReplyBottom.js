import rubbishBin from '../../../../../assets/icons/rubbish-bin-delete-button.png'

function ReplyBottom() {
    return (
        <div className='reply-bar'>
            <button className='reply-button' type="button">Send</button>
            <img className='reply-icon'
                src={rubbishBin}
                alt="delete button" 
            />
            <img className='reply-icon'
                src={rubbishBin}
                alt="delete button"  
            />
            <img className='reply-icon-2'
                src={rubbishBin}
                alt="delete button" 
            />
         </div>
    );
    
}

export default ReplyBottom