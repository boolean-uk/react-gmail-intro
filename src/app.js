import './styles/app.css'
import Header from './components'
import {Nav1} from './components'
import { Emailtoolbar } from './components'
import { Article } from './components'

function App() {
  return (
    <div className="app">

      <Header />

      <Nav1 />
      <main className="email-view">
       
        <Emailtoolbar />
        
        <Article />

      </main>
    </div>
  )
}

export default App
