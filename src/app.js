import "./styles/app.css";
// import MainSection from "./MainSection.js";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Emailtools from "./Emailtools.js";
import Emailcontents from "./Emailcontents.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      {/* <MainSection /> */}
      <main className="email-view">
        <Emailtools /> 
        <Emailcontents />
      </main>
    </div>
  );
}

export default App;
