import "./styles/App.css";

import GmailHeader from "./components/GmailHeader";
import GmailLeftMenu from "./components/GmailLeftMenu";
import GmailMain from "./components/GmailMain";

function App() {
  return (
    <div className="app">
      <GmailHeader />
      <GmailLeftMenu />
      <GmailMain />
    </div>
  );
}

export default App;
