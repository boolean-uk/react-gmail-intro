import "./styles/app.css";

import HeaderContent from "Component/Header/header";
import MainContent from "Component/Main/main";
import LeftMenuContent from "Component/Left_menu/left_menu";

function App() {
  return (
    <div className="app">
      <HeaderContent />
      <LeftMenuContent />
      <MainContent />
    </div>
  );
}

export default App;
