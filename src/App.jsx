import './styles/App.css'

import Header from './Components/Header/Header'
import LeftNav from './Components/LeftNav/LeftNav'
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftNav />
      <Main />
    </div>
  )
}

export default App
