import React from 'react'
import backArrow from '../assets/icons/back-arrow.png'
import '../styles/RespondMail.css'

function RespondMail() {
  return (
    <section className="email-writing">
        <div className='writer-info'>
        <img className="icon" src={backArrow} alt="reply button" />
         <h2> Responder@mail.com</h2>

        </div>

    </section>
  )
}

export default RespondMail