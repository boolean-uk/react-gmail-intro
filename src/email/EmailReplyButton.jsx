import { useState } from "react";
import { EmailReply } from "./EmailReply";
import ReactModal from 'react-modal'
import './email.css'
export function EmailReplyButton(){
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return(
      <div className="emailReplyContainer">
        <button onClick={openModal}>Reply</button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Email Reply"
        >
          <EmailReply />
          <button onClick={closeModal}>Close</button>
        </ReactModal>
      </div>
  )
}