import "./styles/App.css";

// components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

function App() {
    return (
        <div className="app">
            <Header />

            <Navigation />

            <Main />
        </div>
    );
}

export default App;
