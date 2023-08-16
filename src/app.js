import Header from './components/Header'
import EmailView from './views/EmailView'
import './styles/emailview.css'
import './styles/header.css'
// import './styles/app.css'

function App() {

  return (
    <> 
    <div className="app">
      <Header />
      <EmailView />
    </div>
    </>
  )
}

export default App;