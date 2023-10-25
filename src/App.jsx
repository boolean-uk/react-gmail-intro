import "./styles/App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <>
      <div className="app">
        <Header></Header>

        <Nav></Nav>

        <Main></Main>
      </div>
    </>
  );
}

export default App;
