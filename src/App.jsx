import "./styles/App.css";

import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Main from "./Main_Body";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
