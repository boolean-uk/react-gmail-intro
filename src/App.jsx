import '.src/styles/App.css'
import Header from './Header';
import MainBody from './MainBody';
import LeftMenu from './LeftMenu';

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
