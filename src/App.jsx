import "./styles/App.css";

import HeaderSection from "./components/Header/HeaderSection";
import MainSection from "./components/Main/MainSection";
import NavSection from "./components/Nav/NavSection";

function App() {
  return (
    <div className="app">
      <HeaderSection />
      <NavSection />
      <MainSection />
    </div>
  );
}

export default App;
