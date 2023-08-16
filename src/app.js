import "./styles/app.css";

import Header from "./elements/Header/Header";
import NavElement from "./elements/LeftMenuNav/NavElement";
import Main from "./elements/Main/Main";

function App() {
    return (
        <div className="app">
            <Header />
            <NavElement />
            <Main />
        </div>
    );
}

export default App;
