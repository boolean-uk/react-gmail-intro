import React from 'react'
import EmailActions from './EmailActions'
import EmailHeader from './EmailHeader'

function EmailContent() {
  return (
    <>
        <article className="email-content">
          <Title/>
          <EmailHeader/>
          <section className="email-body">
            <div className="content">
              <img src="src/assets/images/flaticon-welcome-image.png" alt="Flaticon welcome message" />
            </div>
          </section>
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