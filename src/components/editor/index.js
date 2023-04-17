import React, { useState } from 'react';
function Editor() {
 const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSend = () => {
    console.log(text);
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '16px' }}>
        <textarea
          style={{ width: '100%', height: '100%', border: 'none', resize: 'none', outline: 'none', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
          placeholder="Write your email here"
          value={text}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
        <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
export default Editor