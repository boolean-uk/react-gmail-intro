import "./styles/App.css";
import Header from "./header";
import LeftMenu from "./LeftMenu";
import EmailToolbar from "./EmailToolbar";
import EmailContentHeader from "./EmailContentHeader";
import EmailBody from "./EmailBody";
import EmailActions from "./emailActions";

function App() {
  return (
    <div className='app'>
      <Header />
      <LeftMenu />
      <main className='email-view'>
        <EmailToolbar />
        <article className='email-content'>
          <div className='title'>
            <h1>Welcome to Flaticon</h1>
          </div>
          <EmailContentHeader />
          <EmailBody />
          <EmailActions />
        </article>
      </main>
    </div>
  );
}

export default App;
