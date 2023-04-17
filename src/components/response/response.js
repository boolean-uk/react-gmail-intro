import './response.css'

import backArrow from '../../assets/icons/back-arrow.png'
import openExternal from '../../assets/icons/open-external.svg'
import dots from '../../assets/icons/dots.svg'

import underline from '../../assets/icons/underline.svg'
import paperclip from '../../assets/icons/paperclip.svg'
import link from '../../assets/icons/link.svg'
import mood from '../../assets/icons/mood.svg'
import drive from '../../assets/icons/drive.svg'
import image from '../../assets/icons/image.svg'
import lock from '../../assets/icons/lock.svg'
import edit from '../../assets/icons/edit.svg'

import more from '../../assets/icons/more-vert.svg'
import trash from '../../assets/icons/trash.svg'

function Response() {
  return (
    <div className="response">
        <img className="response__avatar"></img>
        <div className='response__box'>
          <img className='respone__box__icon' src={backArrow} alt="reply button" />
          <p className='response__box__email'>Freepik Company (no-reply@freepik.com)</p>
          <img className='response__box__external' src={openExternal} alt='open external' />
          <img className='response__box__dots' src={dots} alt='extend email' />
          <textarea className='response__box__input'></textarea>
          <div className='response__box__options'>
            <button className='response__box__options__button'>Send</button>
            <div className='response__box__options__icons'>
              <img className='response__box__options__icons__icon' src={underline} alt='underline' />
              <img className='response__box__options__icons__icon' src={paperclip} alt='paperclip' />
              <img className='response__box__options__icons__icon' src={link} alt='link' />
              <img className='response__box__options__icons__icon' src={mood} alt='mood' />
              <img className='response__box__options__icons__icon' src={drive} alt='drive' />
              <img className='response__box__options__icons__icon' src={image} alt='image' />
              <img className='response__box__options__icons__icon' src={lock} alt='lock' />
              <img className='response__box__options__icons__icon' src={edit} alt='edit' />
            </div>
            <div className='response__box__options__end'>
              <img className='response__box__options__end__icon' src={more} alt='extend email' />
              <img className='response__box__options__end__icon' src={trash} alt='extend email' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Response