import "./styles/App.css";

import Header from "./Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";
import EmailView from "./EmailView/EmailView";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  );
}

export default App;
