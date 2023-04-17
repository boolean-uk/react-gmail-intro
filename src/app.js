import "./styles/app.css";

import HeaderContent from "Component/Header/header";
import LeftMenuContent from "Component/Left_menu/left_menu";
import MainArticle from "Component/Main/mainContentArticle";
import MainEmailToolbar from "Component/Main/mainEmailToolbar";

function App() {
  return (
    <div className="app">
      <HeaderContent />
      <LeftMenuContent />
      <main className="email-view">
        <MainEmailToolbar />
        <MainArticle />
      </main>
    </div>
  );
}

export default App;
