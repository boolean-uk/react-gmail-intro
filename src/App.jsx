import './styles/App.css'
import Header from './components/header.jsx';
import Nav from './components/nav.jsx';
import Main from './components/main.jsx';
function App() {
  return (
    <div className="app">
      <Header></Header>

      <Nav></Nav>
      
      <Main></Main>
    </div>
  )
}

export default App
