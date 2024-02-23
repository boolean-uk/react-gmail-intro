import React from 'react'
import TextEditor from './ReplyComponents/TextEditor'


function EmailActions() {
  return (
    <>  
        <section className="email-actions">
            <TextEditor/>
            <button>Forward</button>
        </section>
    </>
  )
}

export default EmailActions