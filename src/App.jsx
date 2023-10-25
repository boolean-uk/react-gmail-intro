import "./styles/App.css";

import Header from "./components/header/Header.jsx";
import LeftMenu from "./components/leftMenu/LeftMenu.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <Main></Main>
    </div>
  );
}

export default App;
