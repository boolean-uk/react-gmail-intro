import './styles/App.css'
import './styles/header.css'
import './styles/left-menu.css'
import './styles/emailContent.css'
import './styles/emailToolbar.css'
import './styles/replyForm.css'

import { useState } from 'react'
import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import avatar from './assets/icons/avatar.jpg'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <Main/>

    </div>
  )
}

export default App

function Header(){
  return(
      <header className="header">
          <div className="left-menu">
            <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
  
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
              alt="gmail logo"
            />
          </div>
  
          <SearchBar/>
        </header>
  )
  }

function SearchBar(){
  return (
          <div className="search">
            <input className="search-bar" placeholder="Search mail" />
          </div>
  )
}

function Main(){
  
    return(
      <main className="email-view">
        <EmailToolbar/>
        <Article/>
      </main>
    )

  
}

function Article(){
  const [isClicked, setBool] = useState(false);
let Action;
  if(isClicked){
    Action = <ReplyForm/>
  }else{
    Action = <div></div>
  }
return (<article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <ArticleHeader/>
          <ArticleBody/>
          <section className="email-actions">
            <button onClick={() => setBool(true)}>Reply</button>
            <button onClick={() => setBool(true)}>Forward</button>
          </section>
          {Action}
        </article>
)
}

function ArticleHeader(){
  return(
<header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <Sender/>
              <User/>
            </div>
            <div className="date-info">
              <p>17 March 2021, 09:33</p>
            </div>
           <ArticleActionFooter/>
          </header>
  )
}

function Sender(){

return(
<div className="sender-info">
                <h2>Freepik Company</h2>
                <em>&lt;no-reply@freepik.com&gt;</em>
              </div>
)

}

function User(){

  return(
    <div className="user-info">
    <p>
      to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
    </p>
  </div>
  )
  
  }

function ArticleActionFooter(){
  return(
    <div className="email-action-icons">
    <ul>
      <li>
        <img className="icon" src={backArrow} alt="reply button" />
      </li>
      <li>
        <img
          className="icon"
          src={rateStarButton}
          alt="star button"
        />
      </li>
      <li>
        <img
          className="icon"
          src={rubbishButton}
          alt="delete button"
        />
      </li>
    </ul>
  </div>

  )
}

function ArticleBody(){
  return(
<section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
  )
}

function EmailToolbar(){
  return(
<nav className="email-toolbar">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={downloadButton} alt="archive button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>

  )
}

function LeftMenu(){
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
    <li className="item active">
      <span className="label">Inbox</span>
      <span className="count">3</span>
    </li>
    <li className="item">
      <span className="label">Starred</span>
      <span className="count">2</span>
    </li>

    <li className="item toggle">
      <label htmlFor="hide-read">Hide read</label>
      <input id="hide-read" type="checkbox" checked={false} />
    </li>
   </ul>
  </nav>
)
}

function ReplyForm(){
return(<>
  <header className="email-content--header">
            <div className="avatar"><img className="avatar" src={avatar}></img>
            
            </div>
            <div className='reply-input'>
            <div className='container'>
              <div><img className="icon" src={backArrow} alt="reply button" />
              </div>
              <Sender/>
            </div>
            
              <form>
              <input type="text"></input><br></br>
              <div className='container-footer'>
              <button className='send-btn'>Send</button>
              
              <img className='icon' src={rubbishButton}></img>
              </div>
            </form>
              
             </div> 
      
          </header>
  </>
)


}
