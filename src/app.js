import './styles/app.css'

//Import React Components
import PageHeader from './components/PageHeader/PageHeader'
import PageLeftMenu from './components/PageLeftMenu/PageLeftMenu'
import PageMainView from './components/PageMainView/PageMainView'

function App() {
  return (
    <div className="app">
      <PageHeader />
      <PageLeftMenu />
      <PageMainView />
    </div>
  )
}

export default App
