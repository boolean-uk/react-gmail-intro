import "./styles/App.css";

import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import MainSection from "./Main/MainSection";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Nav></Nav>
      <MainSection></MainSection>
    </div>
  );
}

export default App;
