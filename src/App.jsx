import './styles/App.css'



import PageHeader from './components/PageHeader'
import PageNav from './components/PageNav'
import MailBody from './components/PageMain'

function App() {
  return (
    <div className="app">
      <PageHeader />
      <PageNav />
      <MailBody />
    </div>
  )
}

export default App
