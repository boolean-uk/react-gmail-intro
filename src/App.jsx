import './styles/App.css'
import Header from './components/header.jsx'
import Leftmenu from './components/leftmenu.jsx'
import Main from './components/main.jsx'


function App() {
  return (
    <div className="app">
      <Header></Header>
      <Leftmenu></Leftmenu>
      <Main></Main>
    </div>
  )
}

export default App
