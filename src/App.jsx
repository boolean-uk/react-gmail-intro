import './src/styles/App.css';
import Header from './src/components/header.jsx';
import MainBody from './src/components/main-body.jsx';
import LeftMenu from './src/components/left-menu.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainBody />
    </div>
  );
}

export default App;
