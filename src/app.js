import "./styles/app.css";
import LeftMenu from "./components/leftMenu";
import Head from './components/head'
import Email from './components/email'
import Editor from './components/editor'
function App() {
  return (
    <div className="app">
      <Head/>
      <LeftMenu/>
      <Email/>
      <Editor/>
    </div>
  );
}

export default App;
