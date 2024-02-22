import './styles/App.css'

import { Header } from './components/header'
import { LeftNav } from './components/misc/leftNav'
import { Content } from './components/content'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftNav />
      <Content />
    </div>
  )
}

export default App
