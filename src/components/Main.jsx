import "../styles/Main.css"

import flaticonWelcomeImage from '../assets/images/flaticon-welcome-image.png'
import backArrow from '../assets/icons/back-arrow.png'
import downloadButton from '../assets/icons/download-button.png'
import rateStarButton from '../assets/icons/rate-star-button.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'

// Main 
const Main = () => {
    return (
      <main className="email-view">
            <InnerNav></InnerNav>
            <Article></Article>
      </main>
    )
};

// InnerNav (email-toolbar)
const InnerNav = () => {
    return (
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
};

// Article (email-content)
const Article = () => {
    return (
      <article className="email-content">
        <Title></Title>
        <Header></Header>
        <SectionBody></SectionBody>
        <SectionActions></SectionActions>
      </article>
    )
};

const Title = () => {
    return (
    <div className="title">
       <h1>Welcome to Flaticon</h1>
    </div>
    )
};

// Article--Header
const EmailInfo = () => {
    return (
        <div className="email-info">
        <div className="sender-info">
          <h2>Freepik Company</h2>
          <em>&lt;no-reply@freepik.com&gt;</em>
        </div>
        <div className="user-info">
          <p>
            to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
          </p>
        </div>
      </div>
    )
};

const EmailActionsIcons = () => {
    return (
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
};

const Header = () => {
    return (
     <header className="email-content--header">
        <div className="avatar"></div>
        <EmailInfo></EmailInfo>
        <div className="date-info">
          <p>17 March 2021, 09:33</p>
        </div>
        <EmailActionsIcons></EmailActionsIcons>
     </header>
    )
};

// Article--Sections
const SectionBody = () => {
    return (
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
    )
};

const SectionActions = () => {
    return (
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    )
};

export default Main