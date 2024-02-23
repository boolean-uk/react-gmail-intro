import React from 'react'
import EmailActions from './EmailActions'
import EmailHeader from './EmailHeader'
import EmailBody from './EmailBody.Jsx'

function EmailContent() {
  return (
    <>
        <article className="email-content">
          <Title/>
          <EmailHeader/>
          <EmailBody/>
          <EmailActions/>
        </article>
    </>
  )
}

function Title(){
    return (
        <>
            <div className="title">
                <h1>Welcome to Flaticon</h1>
            </div>
        </>
    )
}
export default EmailContent