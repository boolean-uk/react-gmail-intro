import './styles/App.css'

import HeaderComponent from './components/header/HeaderComp.jsx'
import LeftMenuComponent from './components/leftMenu/LeftMenuComponent.jsx'
import MainComponent from './components/main/MainComponent.jsx'

function App() {
  return (
    <div className="app">
      
      <HeaderComponent></HeaderComponent>

      <LeftMenuComponent></LeftMenuComponent>

      <MainComponent></MainComponent>
        
      
    </div>
  )
}

export default App
