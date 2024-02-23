import React from "react";
import "./WriteEmail.css";
import { RxAvatar } from "react-icons/rx";
import { TiArrowBack } from "react-icons/ti";
import {
  FaCaretDown,
  FaEllipsisH,
  FaRegSmile,
  FaGoogleDrive,
  FaFileImage,
  FaPenAlt,
  FaPaperclip,
} from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import { MdOutlineLink, MdLockClock, MdOutlineMoreHoriz } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { PiTextAUnderlineBold } from "react-icons/pi";

function WriteEmail() {
  return (
    <div className="write-email-container">
      <div className="profile">
        <RxAvatar size={"24px"} />
      </div>
      <div>
      <div className="reply-box">
        <div className="email-reply-toolbar">
          <div className="toolbar-left">
            <TiArrowBack />
            <FaCaretDown />
            <p>Freepik Company(no-reply@freepik.com)</p>
          </div>
          <div className="toolbar-right">
            <AiOutlineExport />
          </div>
        </div>

        <div style={{ paddingTop: "80px" }}>
          <FaEllipsisH />
        </div>

        <div className="toolbar-bottom">
          <div className="toolbar-bottom-left">
            <button
              style={{
                background: "blue",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
              }}
            >
              Send
            </button>
            <div className="icon-container">
              <PiTextAUnderlineBold />
              <FaPaperclip />
              <MdOutlineLink />
              <FaRegSmile />
              <FaGoogleDrive />
              <FaFileImage />
              <MdLockClock />
              <FaPenAlt />
            </div>
          </div>
          <div>
            <MdOutlineMoreHoriz />
            <RiDeleteBin7Fill />
          </div>
        </div>

      </div>
      </div>
      
    </div>
  );
}

export default WriteEmail;
