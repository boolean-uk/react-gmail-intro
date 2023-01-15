import "./styles/app.css";


// importing Hearder part to the app.js
import Header from "./Header.js";

//  import Leftmenu section from the LeftMenu.js
import LeftMenu from "./LeftMenu.js";

// import main section from the main.js
import Main from "./Main.js";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
