import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'


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
