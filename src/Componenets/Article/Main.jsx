import "/src/styles/App.css";
import "/src/styles/Article/Main.css";

import flaticonWelcomeImage from '/src/assets/images/flaticon-welcome-image.png'
import { Header } from './Header'

export const Article = () => {
    return (
        <>
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <Header />
          <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
          </>
    )
}