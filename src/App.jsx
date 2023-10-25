import "./styles/App.css";

/*-------------------Imports---------------------*/
import Header from "./components/Header/index";
import Nav from "./components/Nav/index";
import Main from "./components/Main/index";
/*-------------------Proper Function---------------------*/
function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}
export default App;
