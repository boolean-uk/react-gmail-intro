import LeftMenu from "./LeftMenu";
import EmailToolbar from "./EmailToolbar";
import Header from "./Header";
import Article from "./Article";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Header></Header>
      </header>
      <LeftMenu></LeftMenu>
      <main className="email-view">
        <EmailToolbar></EmailToolbar>
        <article className="email-content">
          <Article></Article>
        </article>
      </main>
    </div>
  );
}

export default App;
