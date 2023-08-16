import '../../../styles/replyform.css'
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosUndo } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PiDotsThreeDuotone } from "react-icons/pi";
import { PiTextAUnderline } from "react-icons/pi";
import { CgAttachment } from "react-icons/cg";
import { IoLinkOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { LiaGoogleDrive } from "react-icons/lia";
import { BsFillImageFill } from "react-icons/bs";
import { MdLockPerson } from "react-icons/md";
import { BsFillPenFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidTrashAlt } from "react-icons/bi";



function ArticleReplyForm() {
    return (
        <>


            <div className='formcontainer'>
                <div className='form-iconholder'>
                    <RiAccountCircleFill />
                </div>
                <div className='input-container'>



                    <div className='form-reply-section'>
                        <div className='reply-section-left'>
                            <i className='return-button'><IoIosUndo /></i>
                            <i className='return-button'><MdArrowDropDown /></i>

                            <p>Freepik Company (no-reply@freepik.com)</p>
                        </div>
                        <div>
                            <i className='return-button'><MdOutlineOpenInNew /></i>
                        </div>

                    </div>

                    <div className='form-completion-section'>
                        <div className='form-dots'>
                            <i className='dots-button'><PiDotsThreeDuotone /></i>
                        </div>

                        <div className='form-attachments'>
                            <div className='left-content'>

                                <button className='form-send-button'>
                                    Send
                                    <i className='button-arrow'><MdArrowDropDown /></i>
                                </button>
                                <i className='button-arrow'><PiTextAUnderline /></i>
                                <i className='button-arrow'><CgAttachment /></i>
                                <i className='button-arrow'><IoLinkOutline /></i>
                                <i className='button-arrow'><BsEmojiSmile /></i>
                                <i className='button-arrow'><LiaGoogleDrive /></i>
                                <i className='button-arrow'><BsFillImageFill /></i>
                                <i className='button-arrow'><MdLockPerson /></i>
                                <i className='button-arrow'><BsFillPenFill /></i>
                            </div>

                            <div className='right-content'>
                                <i className='button-arrow'><BsThreeDotsVertical /></i>
                                <i className='button-arrow'><BiSolidTrashAlt /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ArticleReplyForm