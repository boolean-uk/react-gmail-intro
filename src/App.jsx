import "./styles/App.css";

import Header from "./Header";
import LeftMenu from "./LeftMenu";
import EmaiToolbar from "./EmailToolbar";
import EmailContent from "./EmailContent";
import WriteEmail from "./WriteEmail";

function App() {
  return (
    <div className="app">
      <Header />

      <LeftMenu />

      <main className="email-view">
        <EmaiToolbar />

        <EmailContent />
        <WriteEmail />
      </main>
    </div>
  );
}

export default App;
