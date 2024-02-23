import React, { useState } from 'react';

function TextEditor() {
  const [isTextBoxOpen, setIsTextBoxOpen] = useState(false);
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    setIsTextBoxOpen(true);
  };

  const handleTextBoxChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveButtonClick = () => {
    // Do something with the entered text, for example, log it to the console
    console.log('Entered text:', text);
    // Close the text box
    setIsTextBoxOpen(false);
    // Clear the text
    setText('');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Reply</button>
      {isTextBoxOpen && (
        <div>
          <div className="reply-box-container">
            <img className="profile-pic" src="src\assets\icons\user_pfp.png" alt="profile picture" />
            <input className="inptest" type="text" placeholder="Subject" />
            <textarea className="textTest" placeholder="Your message..." />
            <button className="btnTest" onClick={handleSaveButtonClick}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextEditor;