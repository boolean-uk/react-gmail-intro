import './styles/App.css'


import { Header } from './Componenets/Header'
import { LeftMenu } from './Componenets/LeftMenu'
import { MailToolbar } from './Componenets/ToolBar'
import { Article } from './Componenets/Article/Main'


function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <main className="email-view">
        <MailToolbar />
        <article className="email-content">
          <Article />
        </article>
      </main>
    </div>
  )
}

export default App
