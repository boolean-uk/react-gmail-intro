import './styles/App.css'

import LeftMenu from './components/header/leftMenu';
import Header from "./components/header/header";
import Main from './components/main/main';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <Main></Main>
    </div>
  )
}

export default App
