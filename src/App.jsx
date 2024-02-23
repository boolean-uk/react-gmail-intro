
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles/App.css';
import Header from './Header';
import LeftMenu from './LeftMenu';
import EmailView from './EmailView';

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  );
}

export default App;
