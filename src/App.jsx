import React from "react";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import EmailView from "./components/EmailView";
import EmailComposer from "./components/EmailComposer";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
      <EmailComposer />
    </div>
  );
}

export default App;
