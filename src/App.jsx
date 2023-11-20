import './styles/App.css';
import Header from './components/header.jsx';
import MainBody from './components/main-body.jsx';
import LeftMenu from './components/left-menu.jsx';
import EmailToolbar from './components/email-toolbar.jsx';
function App() {
  return (
    <div className="app">
      <Header />
      <EmailToolbar />
      <LeftMenu />
      <MainBody />
    </div>
  );
}

export default App;
