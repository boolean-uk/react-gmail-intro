import './styles/App.css'



import PageHeader from './components/PageHeader'
import LeftMenu from './components/LeftMenu'
import EmailView from './components/EmailView'

function App() {
  return (
    <div className="app">
      <PageHeader />
      <LeftMenu />
      <EmailView />
    </div>
  )
}

export default App
