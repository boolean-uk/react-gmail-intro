import "./styles/app.css";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Emailtools from "./Emailtools.js";
import Emailcontents from "./Emailcontents.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <main className="email-view">
        <Emailtools />
        <Emailcontents />
      </main>
    </div>
  );
}

export default App;
