import "./styles/App.css";

import Mail from "./Mail/Mail";
import Layout from "./Layout/Layout";

function App() {
    return (
        <div className="app">
            <Layout>
                <Mail />
            </Layout>
        </div>
    );
}

export default App;
