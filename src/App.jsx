import './styles/App.css'
import Header from './components/Header/index.jsx'
import LeftMenu from './components/Left-Menu/Left-Menu.jsx'
import Main from './components/Main/Main.jsx'



function App() {
  return (
    <div className="app">
      
      <Header/>
       <LeftMenu/>
      <Main/>

    </div>
  )
}

export default App
