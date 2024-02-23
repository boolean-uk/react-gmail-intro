import "./styles/App.css";
import Header from "./AppHeader";
import LeftMenu from "./AppLeftMenu";
import Body from "./AppBody";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Body />
    </div>
  );
}

export default App;
