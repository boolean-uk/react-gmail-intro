import flaticonWelcomeImage from '../assets/images/flaticon-welcome-image.png';
import '../styles/main-body.css';
import EmailToolbar from './email-toolbar';


function MainBody() {
  return (
    <main className="email-view">
      <EmailToolbar />
      <article className="email-content">
        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>
        <header className="email-content--header">
          <div className="avatar"></div>
          <div className="email-info">
            <div className="sender-info">
              <h2>Flaticon Team</h2>
              <em>&lt;no-reply@flaticon.com&gt;</em>
            </div>
            <div className="user-info">
              <p>
                to me <em>&lt;myemail@example.com&gt;</em>
              </p>
            </div>
          </div>
          <div className="date-info">
            <p>Today</p>
          </div>
          <div className="email-action-icons">
            <ul>
              <li>
                <button>Reply</button>
              </li>
              <li>
                <button>Forward</button>
              </li>
            </ul>
          </div>
        </header>
        <section className="email-body">
          <div className="content">
            <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
          </div>
        </section>
      </article>
    </main>
  );
}

export default MainBody;
