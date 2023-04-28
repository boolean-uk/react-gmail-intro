import "./styles/app.css";

import Header from "./Header";
import LeftMenu from "./left-menu";
import MainEmails from "./main-emails";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainEmails />
    </div>
  );
}

export default App;
